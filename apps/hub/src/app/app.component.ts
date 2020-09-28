import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NxTreeFlatDataSource,
  NxFlatTreeControl,
  NxTreeNode,
  NxFlatTreeNode,
} from '@aposin/ng-aquila/tree';

import { Message } from '@ems/api-interfaces';

/**
  This interface defines a single node of the trees data structure.
*/
export interface MyTreeNode extends NxTreeNode {
  children?: MyTreeNode[];
  label: string;
  icon?: string;
  query?: any;
}

/** Flat node with expandable and level information */
interface MyFlatTreeNode extends NxFlatTreeNode {
  icon: string;
  label: string;
  query?: any;
}

@Component({
  selector: 'ems-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  navigationData: MyTreeNode[] = [
    {
      label: 'Option 1',
      icon: 'user-business-o',
      children: [
        {
          label: 'Option 1.1',
          query: { a: '1.1' },
        },
        {
          label: 'Option 1.2',
          children: [
            {
              label: 'Option 1.2.1',
              query: { a: '1.2.1' },
            },
            {
              label: 'Option 1.2.2',
              query: { a: '1.2.2' },
            },
            {
              label: 'Option 1.2.3',
              children: [
                {
                  label: 'Option 1.2.3.1',
                  children: [
                    {
                      label: 'Option 1.2.3.1.1',
                      query: { a: '1.2.3.1.1' },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Option 1.3',
          query: { a: '1.3' },
        },
      ],
    },
    {
      label: 'Option 2',
      icon: 'file',
      children: [
        {
          label: 'Option 2.1',
          query: { a: '2.1' },
        },
        {
          label: 'Option 2.2',
          query: { a: '2.2' },
        },
        {
          label: 'Option 2.3',
          query: { a: '2.3' },
        },
      ],
    },
    {
      label: 'Option 3',
      icon: 'file',
      query: { a: '3' },
    },
  ];

  _dataSource: NxTreeFlatDataSource<MyTreeNode, MyFlatTreeNode>;

  _treeControl: NxFlatTreeControl<MyFlatTreeNode>;

  public log = console.log;

  constructor(private http: HttpClient) {
    this._treeControl = new NxFlatTreeControl();
    this._dataSource = new NxTreeFlatDataSource(
      this._treeControl,
      this.navigationData
    );
  }

  _hasChild = (_: number, node: NxFlatTreeNode) => node.expandable;
}
