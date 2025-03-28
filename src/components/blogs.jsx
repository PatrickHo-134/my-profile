import React, { Component } from "react";
import { Link } from "react-router-dom";

function BlogPost({ blogTitle, date, blogURL }) {
  return (
    <div>
      <div className="row blog-item">
        <div className="col-sm-10">
          <h4 className="title">
            <i className="icofont-unique-idea mr-2" />
            <Link to={blogURL}>{blogTitle}</Link>
          </h4>
        </div>
        <div className="col-sm-2 date">{date}</div>
      </div>
      <hr />
    </div>
  );
}

export default class Blogs extends Component {
  render() {
    return (
      <section id="blogs" className="blogs">
        <div className="container">
          <div className="section-title">
            <h2>Blogs</h2>
            <p>
              Writing blogs is the best way for me to preserve my knowledge and
              also a useful way to revise what I have learned and done. I don't
              write so often but I try to do it whenever I have time. Blog
              content tends to focus on data science (because it's my major and
              my passion) and software development. It covers most of work and
              projects that I involved in including Uni projects, competitions,
              hackathons and my personal projects.
            </p>
          </div>

          <BlogPost
            blogTitle="[Clojure series] Level Up Your APIs: Using Spec with Compojure.api"
            date="29/03/2025"
            blogURL="https://github.com/PatrickHo-134/my-profile/blob/main/src/components/blogs/define_specs_for_api_endpoints.md"
          />

          <BlogPost
            blogTitle="Avoid this rookie mistake when working with database indexing!"
            date="19/07/2023"
            blogURL="/blog_20230719"
          />

          <BlogPost
            blogTitle="How I converted my profile from an HTML template to React.js?"
            date="12/07/2023"
            blogURL="/blog_20230712"
          />

          <BlogPost
            blogTitle="How to create a dynamically resizable textarea?"
            date="15/03/2023"
            blogURL="/blog_20230315"
          />

          <BlogPost
            blogTitle="Common questions when working with Bootstrap (and CSS)"
            date="23/06/2022"
            blogURL="/blog_20220623"
          />

          <BlogPost
            blogTitle="Learning Note: 7 reasons not to use SELECT * in SQL Queries"
            date="18/02/2022"
            blogURL="/blog_20220218"
          />

          <BlogPost
            blogTitle="TRIGGER vs. CHECK CONSTRAINT for Data Validation"
            date="30/01/2022"
            blogURL="/blog_20220130"
          />

          <BlogPost
            blogTitle="Numpy tricks to boost runtime"
            date="08/04/2020"
            blogURL="https://github.com/PatrickHo-134/portfolio/blob/master/blogs/Numpy%20basic%20syntax%20and%20tricks%20to%20boost%20runtime.ipynb"
          />

          <BlogPost
            blogTitle="Correlation test between two variables in R"
            date="08/03/2020"
            blogURL="https://github.com/PatrickHo-134/portfolio/blob/master/blogs/Correlation%20Test%20Between%20Two%20Variables%20in%20R.ipynb"
          />

          <BlogPost
            blogTitle="What is the difference between DevOps and Agile?"
            date="24/02/2020"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2020/02/24/What-is-the-difference-between-DevOps-and-Agile-Why-a-data-scientist-needs-to-understand-these-concepts"
          />

          <BlogPost
            blogTitle="Big Data Solution With Azure Machine Learning Studio"
            date="16/07/2020"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/07/16/Make-the-most-of-30-day-free-trial-on-Azure-Services---Big-Data-Solutions-with-Azure-Machine-Learning-Part-1"
          />

          <BlogPost
            blogTitle="Activation functions and when to use them"
            date="24/02/2020"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/06/13/Activation-functions-and-when-to-use-them"
          />

          <BlogPost
            blogTitle="My bible of data wrangling"
            date="16/05/2019"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/05/16/My-Bible-of-Data-Wrangling"
          />

          <BlogPost
            blogTitle="40 Interview Questions on Machine Learning and Data Science"
            date="12/03/2019"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/03/12/40-interview-questions-on-machine-learning-and-data-science"
          />

          <BlogPost
            blogTitle="Radial Kernel in Support Vector Machines"
            date="02/12/2018"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2018/12/02/radial-kernel-in-support-vector-machines"
          />

          <BlogPost
            blogTitle="The only thing I want to keep after two years in Data Science"
            date="21/11/2018"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2018/11/21/the-only-thing-i-want-to-keep-after-two-years-into-data-science"
          />

          <BlogPost
            blogTitle="Stochastic Optimization Algorithm: Simulated Annealing"
            date="20/08/2018"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2018/08/20/stochastic-optimization-algorithm-simulated-annealing"
          />

          <BlogPost
            blogTitle="Machine learning cheat sheet for newbies!"
            date="26/07/2018"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2018/07/26/machine-learning-cheat-sheet-for-newbies"
          />

          <BlogPost
            blogTitle="8 steps to become a Data Scientist and they are not easy at all!!!"
            date="17/07/2018"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2018/07/17/8-steps-to-become-a-data-scientist-and-they-are-not-easy-at-all"
          />

          <BlogPost
            blogTitle="How (and why) to create a good validation set"
            date="13/11/2017"
            blogURL="https://patrickhoo.wixsite.com/diveindatascience/single-post/2017/11/13/how-and-why-to-create-a-good-validation-set"
          />
        </div>
      </section>
    );
  }
}
