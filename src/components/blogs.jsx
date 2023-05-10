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
            blogTitle="How to create a dynamically resizable textarea"
            date="15/03/2023"
            blogURL=""
          />

          <BlogPost
            blogTitle="Common questions when working with Bootstrap (and CSS)"
            date="23/06/2023"
            blogURL="/common_questions_in_bootstrap"
          />

          <BlogPost
            blogTitle="Learning Note: 7 reasons not to use SELECT * in SQL Queries"
            date="18/02/2022"
            blogURL=""
          />

          <BlogPost
            blogTitle="TRIGGER vs. CHECK CONSTRAINT for Data Validation"
            date="30/01/2022"
            blogURL=""
          />

          <BlogPost
            blogTitle="Numpy tricks to boost runtime"
            date="08/04/2020"
            blogURL=""
          />

          <BlogPost
            blogTitle="Correlation test between two variables in R"
            date="08/03/2020"
            blogURL=""
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
        </div>
      </section>
    );
  }
}
