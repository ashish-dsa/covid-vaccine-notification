export interface IForegroundTask {
  delay: number;
  onLoop: boolean;
  taskId: string;
  onError: Function;
}
