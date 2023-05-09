import React, { Component } from "react";

function BlogPost({ blogTitle, date, blogURI }) {
  return (
    <div className="row blog-item">
      <div className="col-sm-9">
        <h4 className="title">
          <i className="icofont-unique-idea mr-2" />
          <a href={blogURI}>{blogTitle}</a>
        </h4>
      </div>
      <div className="col-sm-3">{date}</div>
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
            date="15-03-2023"
            blogURI= "../blogs/dynamically_resizable_textarea.html"
          />
          {/* <BlogPost
            title="Common questions when working with Bootstrap (and CSS)"
            date="23-06-2022"
            blogURI=""
          /> */}
          <div className="row">
            {/* How to create a dynamically resizable textarea */}
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="../blogs/dynamically_resizable_textarea.html">
                  How to create a dynamically resizable textarea
                </a>
              </h4>
              <p className="description">
                A collection of resources for creating a dynamically resizable
                textarea.
              </p>
              <p className="date">15-March-2023</p>
            </div>
            {/* Common question in Boostrap*/}
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="./blogs/common_questions_on_bootstrap.html">
                  Common questions when working with Bootstrap (and CSS)
                </a>
              </h4>
              <p className="description">
                In this blog, I collect all useful resources on common problems
                when I worked with Bootstrap and CSS.
              </p>
              <p className="date">23-June-2022</p>
            </div>
            {/* Avoid using SELECT * query */}
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="./blogs/learning_note_7_reasons_not_to_use_select_asterisk.html">
                  Learning Note: 7 reasons not to use SELECT * in SQL Queries
                </a>
              </h4>
              <p className="description">
                In this note, I make a list of important reasons why you should
                not use SELECT * in your queries.
              </p>
              <p className="date">18-February-2022</p>
            </div>
            {/* Trigger vs. Check Constraint */}
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="./blogs/trigger_vs_check_constraint.html">
                  TRIGGER vs. CHECK CONSTRAINT for Data Validation
                </a>
              </h4>
              <p className="description">
                Understand whether to use triggers or check constraints to
                preserve the integrity of your data.
              </p>
              <p className="date">30-January-2022</p>
            </div>
            {/* Numpy tricks */}
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="./blogs/Numpy basic syntax and tricks to boost runtime.html">
                  Numpy tricks to boost runtime
                </a>
              </h4>
              <p className="description">
                These are some of the tricks that you should and shouldn't do
                with Numpy array in order to boost runtime of application.
              </p>
              <p className="date">08-April-2020</p>
            </div>
            {/* Correlation test with R */}
            <div className="col-lg-4 col-md-6 icon-box" data-aos-delay={100}>
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="./blogs/Correlation Test Between Two Variables in R.html">
                  Correlation test between two variables in R
                </a>
              </h4>
              <p className="description">
                Correlation test is used to evaluate the association between two
                or more variables. For instance, if we are interested to know
                whether there is a relationship between the heights of fathers
                and sons, a correlation coefficient can be calculated to answer
                this question.
              </p>
              <p className="date">08-April-2020</p>
            </div>
            {/* difference between DevOps and Agile */}
            <div className="col-lg-4 col-md-6 icon-box" data-aos-delay={200}>
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="https://patrickhoo.wixsite.com/diveindatascience/single-post/2020/02/24/What-is-the-difference-between-DevOps-and-Agile-Why-a-data-scientist-needs-to-understand-these-concepts">
                  What is the difference between DevOps and Agile?
                </a>
              </h4>
              <p className="description">
                During my hunt for a job, I scanned through hundreds of
                advertisements for data scientists and one of the requirements
                always appears in the description is understanding of Agile
                methodology (some other companies require DevOps). Though I have
                been involved in projects which follow agile methodology, I do
                not know what is the difference between Agile and DevOps and why
                a data scientist needs to have this certain knowledge. Thus,
                this article aims to shed some light on these matters.
              </p>
              <p className="date">24-February-2020</p>
            </div>
            {/* Azure ML Studio */}
            <div className="col-lg-4 col-md-6 icon-box" data-aos-delay={300}>
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/07/16/Make-the-most-of-30-day-free-trial-on-Azure-Services---Big-Data-Solutions-with-Azure-Machine-Learning-Part-1">
                  Big Data Solution With Azure Machine Learning Studio
                </a>
              </h4>
              <p className="description">
                In order make the most of 30 day free trial on Azure Services, I
                give a try with services on Azure and it's just unbelievable!
              </p>
              <p className="date">16-July-2019</p>
            </div>
            {/* Activation functions */}
            <div className="col-lg-4 col-md-6 icon-box" data-aos-delay={400}>
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/06/13/Activation-functions-and-when-to-use-them">
                  Activation functions and when to use them
                </a>
              </h4>
              <p className="description">
                The main purpose of these functions is to convert an input
                signal of a neuron and produce an output to feed in the next
                neuron in the next layer. The following pictures will show how
                an activation function works in a neural network.
              </p>
              <p className="date">13-June-2019</p>
            </div>
            {/* Data Wrangling note */}
            <div className="col-lg-4 col-md-6 icon-box" data-aos-delay={500}>
              <div className="icon">
                <i className="icofont-unique-idea" />
              </div>
              <h4 className="title">
                <a href="https://patrickhoo.wixsite.com/diveindatascience/single-post/2019/05/16/My-Bible-of-Data-Wrangling">
                  My Bible of Data Wrangling
                </a>
              </h4>
              <p className="description">
                As a data scientist, you may find yourself in the same situation
                every time you are tasked to clean a dataset using pandas.
              </p>
              <p className="date">16-May-2019</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
