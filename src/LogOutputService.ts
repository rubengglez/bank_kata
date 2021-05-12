import OutputService from "./OutputService";

export default class LogOutputService implements OutputService {
  print(data: string): void {
    console.log(data)
  }
}