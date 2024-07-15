export class PostLogsRequestDto {
    log: string[];

    constructor(log: string[]) {
        this.log = log;
    }
}