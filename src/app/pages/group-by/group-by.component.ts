import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {LotMarkService} from "../../shared/service/lot-mark.service";
import {map, Observable, of} from "rxjs";
import {LotMarks} from "../../shared/model/lot-marks";

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.less']
})
export class GroupByComponent implements OnInit {

  lotMarks$: Observable<LotMarks[]> = of();

  constructor(private lotMarksService: LotMarkService) { }

  ngOnInit(): void {
    this.lotMarks$ = this.lotMarksService.getLotMarks()
      .pipe(
        map(lotMarks => _.groupBy(lotMarks, lotMark => lotMark.lotId)),
        map(aggregatedMarks =>
          Object.keys(aggregatedMarks)
            .map(lotId => new LotMarks(lotId, aggregatedMarks[lotId])))
      );
  }

}
