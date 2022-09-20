import {MarkInfo} from "./mark-info";

export class LotMarks {
  constructor(
    public lotId: string,
    public marks: MarkInfo[]
  ) {
  }
}
