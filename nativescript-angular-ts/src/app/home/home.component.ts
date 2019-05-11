import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public kaas: string = "hallo daar!";
    public numbers: any;

    constructor() {
        // Use the component constructor to inject providers.
        this.numbers = Array(5).fill(4); // [4,4,4,4,4]
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
