# Level Up Your Clojure APIs: Using Spec with Compojure.api

Building robust and maintainable APIs is crucial in modern software development. In the Clojure ecosystem, the combination of Compojure.api for routing and clojure.spec.alpha (Spec) for data specification offers a powerful and elegant way to achieve this.

In this post, we'll dive into how you can leverage Spec to define and validate your data contracts specifically for PATCH endpoints using `compojure.api.sweet`. **PATCH** requests are essential for allowing partial updates to resources, and **Spec** can help ensure the integrity and clarity of these interactions.

## Why Use Clojure Spec for APIs?
Before we jump into the code, let's briefly touch upon the benefits of using Spec in your API development:

- **Automatic Validation**: Spec allows you to define precise rules for your data. Compojure.api can then automatically validate incoming requests against these specifications, ensuring data integrity.
- **API Documentation (Swagger)**: Compojure.api seamlessly integrates with Spec to generate comprehensive Swagger/OpenAPI documentation for your API. This includes the structure and types of your request and response bodies.
- **Data Consistency**: By defining clear specifications, you enforce consistency in the data exchanged by your API.
- **Generative Testing**: Spec can be used for generative testing, automatically creating test data based on your specifications to help you uncover edge cases.
- **Improved Readability and Maintainability**: Specs act as living documentation for your data structures, making your code easier to understand and maintain over time.

## Setting the Stage: Compojure.api and PATCH

**Compojure.api** provides a sweet syntax for defining APIs in Clojure. The `patch` macro specifically handles HTTP PATCH requests, which are typically used to apply partial modifications to a resource.

## Defining Specs for Your PATCH API
Let's imagine we're building an API to manage users, and we want to create a PATCH endpoint to allow updating a user's name and/or email. First, we'll define our Specs:

```
(ns my-api.specs
  (:require [clojure.spec.alpha :as s]))

(s/def ::user-id integer?)
(s/def ::user-name string?)
(s/def ::email string?)

;; Spec for the request body (optional name and email for partial update)
(s/def ::update-request
  (s/keys :opt-un [::user-name ::email]))

;; Spec for the full user object in the response
(s/def ::user
  (s/keys :req-un [::user-id ::user-name ::email]))

;; Spec for a generic message in error responses
(s/def ::message string?)
```

Here's a breakdown of these specs:
- `::user-id`, `::user-name`, `::email`: These are basic specs defining the expected types for user attributes. The `::` prefix is a convention for namespaced keys in Spec.
- `::update-request`: This spec is crucial for our PATCH endpoint. We use `s/keys` with the `:opt-un` (optional and unqualified) option. This indicates that the request body can optionally include the `::user-name` and `::email` keys. This perfectly fits the nature of a PATCH request where only certain fields might be updated.
- `::user`: This spec defines the structure of a complete user object, with `::user-id`, `::user-name`, and `::email` being required (`:req-un`). This will likely be used for the successful response after an update.
- `::message`: A simple spec for a string message, useful for defining the structure of error responses.

## Integrating Specs with `compojure.api.sweet/patch`
Now, let's see how to use these specs when defining our PATCH endpoint using `compojure.api.sweet/patch`:

```
(ns my-api.routes
  (:require [compojure.api.sweet :refer :all]
            [my-api.specs :as specs] ; Assuming your specs are in the my-api.specs namespace
            [ring.util.http-response :as response]))

(defapi user-api
  {:swagger
   {:ui "/swagger"
    :spec "/swagger.json"
    :data {:info {:title "User API with Spec"}}}}

  (context "/users/:id" [id :- specs/::user-id] ; Type-hint the path parameter with the spec
    (patch "/" []
      :summary "Partially update a user's information"
      :body [update-data :- specs/::update-request] ; Type-hint the request body with the spec
      :responses {200 {:body specs/::user :description "Successfully updated user"} ; Describe the success response body
                  404 {:body {:message specs/::message} :description "User not found"} ; Describe an error response body
                  400 {:body {:message specs/::message} :description "Invalid input"}} ; Describe another error response
      (fn [{:keys [id update-data]}]
        (println (str "Attempting to update user with ID: " id " with data: " update-data))
        ;; In a real application, you would perform the update logic here
        (let [existing-user (some-> (get-user-from-db id) ; Assume this function exists
                                     (merge update-data))] ; Merge the update data
          (if existing-user
            (do
              ;; Save the updated user to the database (assume save-user-to-db exists)
              (save-user-to-db existing-user)
              (response/ok existing-user))
            (response/not-found {:message (str "User with ID " id " not found")})))))))

;; Assume you have functions like get-user-from-db and save-user-to-db defined elsewhere.
(defn get-user-from-db [id]
  ;; Replace with your actual database logic
  (when (= id 123)
    {:user-id 123 :user-name "Old Name" :email "old@example.com"}))

(defn save-user-to-db [user]
  ;; Replace with your actual database logic
  (println (str "Saving user: " user)))

;; To integrate this into your application, you would typically use:
;; (def app (api user-api))
```

Notice how we integrate Spec:

- **Path Parameter Type Hinting**: In the `context` definition, `[id :- specs/::user-id]` uses the `:-` syntax to type-hint the id path parameter with our `::user-id` spec. This tells Compojure.api to automatically validate that the `id` conforms to the `integer?` predicate.
- **Request Body Type Hinting**: Similarly, in the patch definition, `:body [update-data :- specs/::update-request]` type-hints the `update-data` parameter (which will hold the parsed request body) with our `::update-request` spec. Compojure.api will ensure that the incoming JSON body adheres to the defined structure (optional `::user-name` and `::email`).
- **Response Body Specification**: In the `:responses` map, we use our specs (`specs/::user` and `{:message specs/::message}`) to describe the expected structure of the response bodies for different HTTP status codes (200 for success, 404 and 400 for errors). This information is crucial for generating accurate Swagger documentation.

## The Power of Integration: Benefits Revisited
By using Spec with `compojure.api.sweet/patch`, you gain significant advantages:

- **Automatic Request Validation**: If a client sends a PATCH request with a body that doesn't conform to the `::update-request` spec (e.g., sending a number for the name), Compojure.api will automatically reject the request with a 400 status code and details about the validation failure.
- **Clear API Documentation**: The Swagger documentation generated by Compojure.api will clearly show that the PATCH endpoint expects an optional request body with `name` and `email` fields of type string, as defined in your specs.
- **Type Safety and Clarity**: The type hints using `:-` improve the readability of your code and provide a clear contract for the data being handled.

## Conclusion
Integrating `clojure.spec.alpha` with `compojure.api.sweet/patch` is a powerful way to build robust, well-documented, and maintainable APIs in Clojure. By defining clear specifications for your data, you can ensure data integrity, generate accurate documentation, and ultimately create a better experience for both API developers and consumers. So, next time you're building a PATCH endpoint with Compojure.api, consider leveraging the power of Clojure Spec to level up your API development!