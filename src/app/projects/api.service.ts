import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}

  productService() {
    // Usually needs to write API here but as I am not fectching data from API, I'll just create an array.
    return [
      {
        id: 1,
        title: ["Analyzing Stock Market using Lagged Correlation Algorithm"],
        tech: [
          "Python",
          "Jupyter Notebook",
          "GitHub",
          "Kaggle",
          "Big Data",
          "ETL",
        ],
        description:
          "In this project, I have developed a lagged correlation algorithm for predicting the market direction more accurately when two stocks are strongly correlated to each other with a lag of K number of trading days.",
        imageUrl: "",
      },

      {
        id: 2,
        title: ["Financial News Aggregator - Maruti"],
        tech: ["Angular", "TypeScript", "BootStrap", "GitHub", "HTML", "CSS"],
        description:
          "In this project, I have developed an Angular WebApp that aggregates news from various sectors and displays to the user",
        imageUrl: "",
      },

      {
        id: 3,
        title: ["Lobster Detection Mobile App"],
        tech: [
          "Flutter",
          "GitHub",
          "Dart",
          "Android Studio",
          "TensorFlow",
          "Google Collab",
          "Kaggle",
        ],
        description:
          "Performs real time object detection of whether there is a lobster in the camera view. Develop app with Flutter, allowing it to be run on Android and iOS devices",
        imageUrl: "",
      },

      {
        id: 4,
        title: ["Appifax"],
        tech: ["HTML", "CSS", "JavaScript", "GitHub", "BootStrap", "Firebase"],
        description:
          "We have developed Appifax to better support local businesses that are struggling during the COVID-19 crisis, and help them emerge and thrive in and beyond the post pandemic world by providing them the platform",
        imageUrl: "",
      },
    ];
  }
}
