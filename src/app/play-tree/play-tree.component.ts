import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';

@Component({
  selector: 'app-play-tree',
  templateUrl: './play-tree.component.html',
  styleUrls: ['./play-tree.component.css']
})
export class PlayTreeComponent implements OnInit {

  treeData = [
    {
      name: 'Fruit',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Fruit loops' },
      ]
    }, {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            { name: 'Broccoli' },
            { name: 'Brussel sprouts' },
          ]
        }, {
          name: 'Orange',
          children: [
            { name: 'Pumpkins' },
            { name: 'Carrots' },
          ]
        },
      ]
    },
  ]

  ngOnInit() {
  }


  treeControl = new NestedTreeControl<any>((node) => {
    return node.children;
  });
  dataSource = new MatTreeNestedDataSource<any>();

  constructor() {
    this.dataSource.data = this.treeData;
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

}
