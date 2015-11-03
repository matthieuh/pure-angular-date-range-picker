export function DateRangePicker() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      weekStart: '&',
      range: '=',
      format: '&'
    },
    templateUrl: 'app/directives/date-range-picker/date-range-picker.html',
    controller: DateRangePickerController,
    controllerAs: 'picker',
    bindToController: true
  };

  return directive;
}

class DateRangePickerController {

  constructor(moment) {
    'ngInject';

    this.Moment = moment;
    this.setConfigurations();
    this.startCalendar = this.Moment();
    this.endCalendar = this.Moment().add(1, 'M');
    this.setInterceptors();
  }

  setConfigurations() {
    this.range = this.range || {};
    this.format = this.format() || 'MM-DD-YYYY';
    let start = this.Moment(this.range.start, this.format);
    let end = this.Moment(this.range.end, this.format);
    end = end.diff(start) >= 0 ? end : start.clone();
    this.rangeStart = start;
    this.rangeEnd = end;
    this.daysSelected = 2;
    this.updateRange();
  }

  updateRange() {
    this.range.start = this.rangeStart ? this.rangeStart.format(this.format) : null;
    this.range.end = this.rangeEnd ? this.rangeEnd.format(this.format) : null;
  }

  setInterceptors() {
    this.startCalendarInterceptors = {
      moveToPrevClicked: () => {
        this.moveCalenders(-1);
      },
      daySelected: (day) => {
        this.dayInStartSelected(day);
        this.daySelected(day);
      }
    };

    this.endCalendarInterceptors = {
      moveToNextClicked: () => {
        this.moveCalenders(1)
      },
      daySelected: (day) => {
        this.dayInEndSelected(day);
        this.daySelected(day);
      }
    }
  }

  dayInStartSelected(day) {
    let prevMonth = this.startCalendar.clone().subtract(1, 'M');
    let nextMonth = this.endCalendar;

    if (day.isSame(prevMonth, 'month')) {
      this.moveCalenders(-1);
    } else if (day.isSame(nextMonth, 'month')) {
      this.dayInEndSelected(day);
    }
  }

  dayInEndSelected(day) {
    let prevMonth = this.startCalendar;
    let nextMonth = this.endCalendar.clone().add(1, 'M');

    if (day.isSame(prevMonth, 'month')) {
      this.dayInStartSelected(day);
    } else if (day.isSame(nextMonth, 'month')) {
      this.moveCalenders(1);
    }
  }

  daySelected(day) {
    switch (this.daysSelected) {
      case 0:
        this.rangeStart = day;
        this.daysSelected = 1;
        break;
      case 1:
        if (day.diff(this.rangeStart, 'days') < 0) {
          this.rangeStart = day;
        } else {
          this.rangeEnd = day;
          this.daysSelected = 2;
        }
        break;
      case 2:
        this.daysSelected = 1;
        this.rangeStart = day;
        this.rangeEnd = null;
        break;
    }

    this.updateRange();
  }

  moveCalenders(month) {
    this.startCalendar = this.startCalendar.clone().add(month, 'M');
    this.endCalendar = this.endCalendar.clone().add(month, 'M');
  }
}