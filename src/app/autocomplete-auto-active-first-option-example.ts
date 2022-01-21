import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocomplete} from "@angular/material/autocomplete";

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'autocomplete-auto-active-first-option-example',
  templateUrl: 'autocomplete-auto-active-first-option-example.html',
  styleUrls: ['autocomplete-auto-active-first-option-example.css'],
})
export class AutocompleteAutoActiveFirstOptionExample implements OnInit {
  @ViewChild('autocompleteInput') autocompleteInput: MatAutocomplete;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  elvalorquequiero: string;
  elultimovalor: string;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.myControl.valueChanges.pipe(distinctUntilChanged()).subscribe((a: any) => {
      if(this.elvalorquequiero && a !== this.elvalorquequiero){
        this.myControl.setValue(this.elvalorquequiero)
      }
      this.elultimovalor=a;
    })
  }

  public setBillingActivity(object: any){
    this.elvalorquequiero = this.myControl.value;
  }




  public optionClick(event: any) {
    event.stopPropagation();
    debugger
    console.log(this.myControl.value)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */