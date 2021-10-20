import { Component, OnDestroy, OnInit } from '@angular/core';

interface Metric {
  used: number,
  available: number
};

interface Node {
  name: string,
  cpu: Metric,
  mem: Metric
};

@Component({
  selector: 'dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit, OnDestroy {
  cpu: Metric = { used: 0, available: 0 };
  mem: Metric = { used: 0, available: 0 };
  cluster1: Node[] = [];
  cluster2: Node[] = [];
  interval: any;


  constructor() { }


  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.generateData();
    this.interval = setInterval(() => { this.generateData(); }, 15000);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i <= 3; i++) this.cluster1.push(this.randomNode(i));
    for (let i = 4; i <= 6; i++) this.cluster2.push(this.randomNode(i));
  }

  private randomNode(i: number): Node {
    let node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
