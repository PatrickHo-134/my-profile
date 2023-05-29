import { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Projects extends Component {
  render() {
    return (
      <section id="portfolio" className="portfolio section-bg">
        <Container>
          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <ul>
            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/1problem-3languages"
              >
                1 Problem - 3 languages (Coding Challenge):
              </a>
              This repository contains solutions to challenges of Advent of Code
              2020, written in 3 languages: Python, Javascript and Clojure. The
              reason for the existence of this repo is to demonstrate how my
              thinking process and coding style has significantly changed after
              moving away from object-oriented programming to functional
              programming for almost a year.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/spelling-bee-cljs-reagent"
              >
                New York Times' spelling bee (Web Development):
              </a>
              This is a remade version of New York Times' spelling bee game
              using Clojurescript, Reagent and Re-frame.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/puzzle-games"
              >
                Puzzle games (Web Development):
              </a>
              A React application that features 3 popular games: tic tac toe,
              sudoku and crossword.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/geographical-data-analysis/blob/master/Data_analysis_on_geographic_data.ipynb"
              >
                Depth To Basement Analysis and Prediction (Data Science
                Project):
              </a>
              The goal of this project is to analyse a dataset provided by
              Department of State Development (SA 2018) and buld a machine
              learning model to predict the depth to basement rocks at a set
              location in the Gawler Craton in South Australia.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://www.youtube.com/watch?v=vsg7V2Czzp0&ab_channel=%E5%BC%A0%E7%82%AB%E5%BE%B7"
              >
                SeekParking (Uni Project):
              </a>
              SeekParking is created to help users quickly find parking spaces
              in Melbourne CBD. The App consists of important features such as
              searching for available parking spaces close by a destination,
              navigating to an exact parking location, filtering of parking
              spaces based on parking time limits, setting alert for parking
              completion time, finding their car after they parked and finding
              possible available vacant car park at their arrival time. The app
              can be downloaded from Google Play. User may need to register on
              Google Play for downloading the application.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/Vicroad-crash-visualisation-Shiny"
              >
                Visualisation of Road Crashes in Victoria, Australia (Data
                Science project):
              </a>
              An interactive web application created by Shiny to visualise all
              roads crashes in Victoria, Australia.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/Data-analysis-challenge/tree/master"
              >
                Classifying News Articles using Machine Learning (Data Science
                Project):
              </a>
              This project aims at finding a classifier that can classify news
              articles into 24 classes with best possible accuracy. The dataset
              in this project is a large set of news articles that are crawled
              from a news website. The corpus contains 133,055 news articles in
              total. 80% of news articles are randomly selected for training.
              The other 20% are used for testing, the labels of which are
              withheld.
            </li>

            <li className="project-item">
              <a
                className="project-name"
                href="https://github.com/PatrickHo-134/covid19-analysis"
              >
                Data Analysis with Covid19 public dataset (Data Science
                Project):
              </a>
              An attemp to make an exploratory data analysis on the open-source
              dataset of Covid-19 from Johns Hopkins University.
            </li>
          </ul>
        </Container>
      </section>
    );
  }
}
