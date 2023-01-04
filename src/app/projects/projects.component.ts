import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import {
  MatChipInputEvent,
  MatChipSelectionChange,
} from "@angular/material/chips";
import { Router } from "@angular/router";

// Imports for Filtering Data
import { ApiService } from "./api.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  @ViewChild("techInput") techInput: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private api: ApiService) {}
  ngOnInit() {
    this.getProduct();
  }

  // Data for Filtering
  filterCheckBoxesArray: any = [
    {
      id: 1,
      type: "checkbox",
      tech: "GitHub",
    },

    {
      id: 2,
      type: "checkbox",
      tech: "Java",
    },

    {
      id: 3,
      type: "checkbox",
      tech: "JavaScript",
    },

    {
      id: 4,
      type: "checkbox",
      tech: "SQL",
    },

    {
      id: 5,
      type: "checkbox",
      tech: "HTML",
    },

    {
      id: 6,
      type: "checkbox",
      tech: "CSS",
    },

    {
      id: 7,
      type: "checkbox",
      tech: "Microsoft Azure",
    },

    {
      id: 8,
      type: "checkbox",
      tech: "Power BI",
    },

    {
      id: 9,
      type: "checkbox",
      tech: "Jupyter Notebook",
    },

    {
      id: 10,
      type: "checkbox",
      tech: "Google Cloud",
    },

    {
      id: 11,
      type: "checkbox",
      tech: "Android Studio",
    },

    {
      id: 12,
      type: "checkbox",
      tech: "Firebase",
    },

    {
      id: 13,
      type: "checkbox",
      tech: "Angular",
    },

    {
      id: 14,
      type: "checkbox",
      tech: "TypeScript",
    },

    {
      id: 15,
      type: "checkbox",
      tech: "BootStrap",
    },

    {
      id: 16,
      type: "checkbox",
      tech: "JUnit",
    },

    {
      id: 17,
      type: "checkbox",
      tech: "API",
    },

    {
      id: 18,
      type: "checkbox",
      tech: "PHP",
    },
  ];

  productArray: any = [];
  arrays: any = [];
  getProduct() {
    this.productArray = this.api.productService();
    this.arrays = this.api.productService();
  }

  // Functionality for Filtering Data

  // event paramter
  tempArray: any = [];
  newArray: any = [];

  onChange(event: MatCheckboxChange) {
    const value = event.source.value;
    if (event.checked) {
      this.tempArray = this.arrays.filter((e: any) => e.tech.includes(value));
      this.productArray = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        const firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          const obj = firstArray[i];
          this.productArray.push(obj);
        }
      }
    } else {
      this.tempArray = this.productArray.filter(
        (e: any) => !e.tech.includes(event.source.value)
      );
      this.newArray = [];
      this.productArray = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.productArray.push(obj);
        }
      }
    }
  }
}
