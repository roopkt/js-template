
declare var COMPOSITE_APP;


export interface ClientAppSettings {
    baseUrl: string;
    apiUrl: string;
}

export function getClientAppSettings(): ClientAppSettings {
    const DEFAULT_SETTINGS: ClientAppSettings = {
        'baseUrl': 'http://localhost:56005/',
        'apiUrl': 'http://localhost:56005/api'
    };

    if (typeof (COMPOSITE_APP) === 'undefined') {
        return DEFAULT_SETTINGS;
    }

    const settings = Object.assign({}, DEFAULT_SETTINGS, COMPOSITE_APP.clientAppSettings);

    return settings;
}
