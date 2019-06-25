export interface Controller {
    read(request: Request, response: Response);

    create(request: Request, response: Response);

    update();
}