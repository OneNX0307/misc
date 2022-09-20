import {Coordinate2d} from "./coordinate2d";
import {Value2d} from "./value2d";
import {Size} from "./size";

export class MarkInfo {
  constructor(
    public lotId: string,
    public coordinate: Coordinate2d,
    public value2D: Value2d,
    public size: Size
  ) {
  }
}
