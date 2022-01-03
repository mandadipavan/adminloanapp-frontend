import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { DataSourceService } from '../data-source.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  tasksToComplete: number = 0;
  loanReviews: number = 0;
  loanApprovals: number = 0;
  @Input() chartData: any[];
  public pieChartData: number[];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  constructor(private dataSourceService: DataSourceService) {

  }

  async ngOnInit() {
    // this.chart.chart.config.data.datasets = this.chartData;
    // this.chart.chart.update();
    // console.log("chart data: ", this.chartData);
    // await this.dataSourceService.getLoanReviewsByAssignee()
    //   .then(
    //     data => {
    //       this.loanReviews = data;
    //       console.log("data 1 :", data);
    //       this.pieChartData.push(10);
    //     }
    //   ).catch(
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // console.log("thifjndkjf", this.loanReviews);

    // await this.dataSourceService.getLoanApprovalsByAssignee()
    //   .then(
    //     data => {
    //       this.loanApprovals = data;
    //       this.pieChartData.push(30);
    //     }
    //   ).catch(
    //     error => {
    //       console.log(error);
    //     }
    //   );

  }


  public pieChartLabels: string[] = ['Reviewed', 'Rejected', "Approved"];
  // = [0, 1, 2];//= [this.loanReviews, this.loanApprovals, this.loanApprovals];
  public pieChartType: any = 'pie';
  public pieChartColors: any[] = [
    {
      backgroundColor: ['rgba(255, 140, 26)', 'rgba( 255, 26, 26)', 'rgba(71, 209, 71)'],

    }

  ];
  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  }

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

}
