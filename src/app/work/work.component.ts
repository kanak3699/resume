import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  animation,
} from "@angular/animations";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
  animations: [
    trigger("timelineAnimation", [
      state("*", style({ transform: "translateX(0)" })),
      transition("void => *", [
        animate(
          1000,
          keyframes([
            style({ transform: "translateX(-100%)", offset: 0 }),
            style({ transform: "translateX(15px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class WorkComponent implements OnInit {
  workplaces = [
    {
      duration: "Jan 2021 - Present",
      position: "Software Developer",
      company: "Acme Corp",
      description:
        "Working on the development of web applications using Angular and Node.js",
    },
    {
      duration: "Oct 2018 - Dec 2020",
      position: "Full Stack Developer",
      company: "XYZ Inc",
      description:
        "Developed and maintained various web applications using React and Python",
    },
    {
      duration: "Jun 2016 - Sep 2018",
      position: "Front End Developer",
      company: "ABC Co",
      description:
        "Implemented responsive designs and interactive features using HTML, CSS, and JavaScript",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
