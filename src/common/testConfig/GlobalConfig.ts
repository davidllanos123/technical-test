export abstract class GlobalConfig {
    readonly BOOKER_API: string = process.env.BOOKER_API ?? '';
    readonly ADMIN_TOKEN: string = process.env.ADMIN_TOKEN ?? '';

    protected constructor(){}
}