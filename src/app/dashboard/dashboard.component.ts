import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    this.renderCharts();
  }

  renderCharts() {
    Highcharts.chart('lineChart', {
      title: { text: 'Monthly Sales Overview (in $1000s)' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
      series: [{
        type: 'line',
        name: 'Sales',
        data: [30, 35, 40, 50, 45, 60, 70, 65, 55, 50, 45, 60]
      }]
    });

    Highcharts.chart('barChart', {
      chart: { type: 'bar' },
      title: { text: 'Top Products Sold (Units)' },
      xAxis: { categories: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'] },
      series: [{
        type: 'bar',
        name: 'Units Sold',
        data: [500, 400, 300, 200, 150]
      }]
    });

    Highcharts.chart('pieChart', {
      chart: { type: 'pie' },
      title: { text: 'User Acquisition by Source' },
      series: [{
        type: 'pie',
        name: 'Users',
        data: [
          { name: 'Organic Search', y: 45 },
          { name: 'Direct', y: 25 },
          { name: 'Social Media', y: 15 },
          { name: 'Referral', y: 10 },
          { name: 'Email Campaign', y: 5 }
        ]
      }]
    });

    Highcharts.chart('columnChart', {
      chart: { type: 'column' },
      title: { text: 'Website Performance Metrics' },
      xAxis: { categories: ['Page Views', 'Unique Visitors', 'Avg Session Duration (min)', 'Bounce Rate (%)'] },
      series: [{
        type: 'column',
        name: 'Performance',
        data: [12000, 3000, 5.6, 35]
      }]
    });
  }
}
