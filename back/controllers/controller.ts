export interface Controller {
    read(request: Request, response: Response);

    create();

    update();
}