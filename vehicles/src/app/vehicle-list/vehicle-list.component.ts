import { Component, OnInit } from '@angular/core';
import { Vehicle} from '../model/vehicle';
import { VehicleServiceService } from '../vehicle-service.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleServiceService) {
    this.vehicles = vehicleService.getVehicles();
   }

  ngOnInit() {
  }

  onSelect(vehicle: Vehicle) {this.selectedVehicle = vehicle;}

}
