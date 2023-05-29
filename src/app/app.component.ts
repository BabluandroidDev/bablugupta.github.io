import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coachLayout: number[][] = [];
  numSeats: number = 0;
  coachFull: boolean = false;

  constructor() {
    // Initialize the coach layout
    this.initializeCoachLayout();
  }

  initializeCoachLayout() {
    let rowSeats = 7; // Number of seats in a row
    let lastRowSeats = 3; // Number of seats in the last row
    let totalRows = Math.floor(80 / rowSeats); // Total number of full rows
    let remainingSeats = 80 % rowSeats; // Remaining seats in the last row

    // Create full rows with 7 seats
    for (let i = 0; i < totalRows; i++) {
      this.coachLayout.push(Array(rowSeats).fill(0));
    }

    // Create last row with remaining seats
    this.coachLayout.push(Array(remainingSeats).fill(0));

    // Add empty seats in the last row to make it 7 seats in total
    if (remainingSeats < rowSeats && remainingSeats > 0) {
      this.coachLayout[this.coachLayout.length - 1].push(...Array(rowSeats - remainingSeats).fill(0));
    }
  }

  reserveSeats() {
    if (this.numSeats > 0) {
      let reservedSeats = 0;

      // Iterate over the coach layout to reserve seats
      for (let i = 0; i < this.coachLayout.length; i++) {
        let row = this.coachLayout[i];

        // Find an available sequence of seats in the current row
        let startIdx = -1;
        for (let j = 0; j < row.length; j++) {
          if (row[j] === 0) {
            if (startIdx === -1) {
              startIdx = j;
            }

            reservedSeats++;
            row[j] = 1;

            if (reservedSeats === this.numSeats) {
              this.coachFull = this.checkCoachFull();
              return;
            }
          } else {
            startIdx = -1;
            reservedSeats = 0;
          }
        }

        // If seats are not available in one row, reserve nearby seats
        if (reservedSeats < this.numSeats) {
          let nearbySeats = this.reserveNearbySeats(i, startIdx, reservedSeats);
          reservedSeats += nearbySeats;
          if (reservedSeats === this.numSeats) {
            this.coachFull = this.checkCoachFull();
            return;
          }
        }
      }

      this.coachFull = this.checkCoachFull();
    }
  }

  reserveNearbySeats(rowIdx: number, startIdx: number, reservedSeats: number): number {
    let nearbySeats = 0;

    // Reserve nearby seats in the current row
    for (let i = startIdx + 1; i < this.coachLayout[rowIdx].length; i++) {
      if (this.coachLayout[rowIdx][i] === 0) {
        reservedSeats++;
        nearbySeats++;
        this.coachLayout[rowIdx][i] = 1;

        if (reservedSeats === this.numSeats) {
          return nearbySeats;
        }
      } else {
        break;
      }
    }

    // Reserve nearby seats in the next row
    for (let i = rowIdx + 1; i < this.coachLayout.length; i++) {
      let row = this.coachLayout[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 0) {
          reservedSeats++;
          nearbySeats++;
          row[j] = 1;

          if (reservedSeats === this.numSeats) {
            return nearbySeats;
          }
        } else {
          return nearbySeats;
        }
      }
    }

    return nearbySeats;
  }

  seatReserved(row: number[], seat: number): boolean {
    return row[seat] === 1;
  }

  checkCoachFull(): boolean {
    for (let row of this.coachLayout) {
      if (row.includes(0)) {
        return false;
      }
    }
    return true;
  }
}
