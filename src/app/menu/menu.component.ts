import { Component, OnInit } from "@angular/core";
import { User } from "./menu";
import { MenudataService } from "./menudata.service";
import { ConfirmationService } from "primeng/api";
import { MenuItem } from "primeng/api";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-menu",
  // providers: [MessageService],
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  selectedMenuOption: string;
  arr: User[] = [];
  salary: number;
  name: string;
  id: string;
  description: string;
  isactive: string;
  config: any;
  collection: User[] = [];
  items: MenuItem[];

  selectedCar: User;
  messageSuccess: boolean;

  constructor(
    private _data: MenudataService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    // this.config = {
    //   itemsPerPage: 8,
    //   currentPage: 1,
    //   totalItems: this.collection.length
    // };
  }

  ngOnInit() {

    this.messageSuccess = true;

    setTimeout(()=>{
         alert("record")
     }, 3000);

  //    setInterval(()=>{
  //     alert("record")
  // }, 3000);



    this.getAlldesignations();
    this.items = [
      {
        label: "View",
        icon: "fa fa-search",
        command: event => this.viewCar(this.selectedCar)
      },

      {
        label: "Delete",
        icon: "fa fa-trash",
        command: event => this.deleteCar(this.selectedCar)
      },
      {
        label: "Edit",
        icon: "fa fa-edit",
        command: event => this.editCar(this.selectedCar)
      }
    ];
  }

  public getAlldesignations() {
    this._data.getAlldesignations().subscribe((data: User[]) => {
      this.arr = data;
    });
  }
  onUserSave(f) {
    this._data.adduser(f.value).subscribe((data: any) => {
      this._data.getAlldesignations().subscribe((data: User[]) => {
        this.arr = data;
      });
      alert("designation Addded ");
    });
    this.getAlldesignations();
  }

  editEmployee(editData) {
    this.id = editData.id;
    this.name = editData.name;

    this.description = editData.description;
    this.isactive = editData.isactive;
  }

  descUpdate(f1) {
    var req = {
      id: this.id,
      name: f1.value.name,
      Description: f1.value.description,
      isactive: f1.value.isactive
    };
    console.log(req);
    this._data.adduser(req).subscribe((data: any) => {
      this._data.getAlldesignations().subscribe((data: any[]) => {
        this.arr = data;
      });
      alert("record edited");
    });
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  onDelete(id: number) {
    console.log(id);
    this._data.getDeleteData(id).subscribe((data: User) => {
      this.ngOnInit();
      // alert("deleted");
    });
  }

  confirmDelete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.onDelete(id);
      },
      reject: () => {}
    });
  }
  viewCar(car: User) {
    this.messageService.add({
      severity: "info",
      summary: "Car Selected",
      detail: car.name + " - " + car.description
    });
  }
  deleteCar(car: User) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].name == car.name) {
        index = i;
        break;
      }
    }
    this.arr.splice(index, 1);

    this.messageService.add({
      severity: "info",
      summary: "Car Deleted",
      detail: car.name + " - " + car.description
    });
  }

  editCar(test) {
    this.messageService.add({
      severity: "info",
      summary: "Car edit",
      detail: "success"
    });

  }
}
