export class Modeling {
    constructor(commandStack: any, eventBus: any, formEditor: any, formFieldRegistry: any, fieldFactory: any);
    _commandStack: any;
    _formEditor: any;
    _formFieldRegistry: any;
    _fieldFactory: any;
    registerHandlers(): void;
    getHandlers(): {
        'formField.add': typeof AddFormFieldHandler;
        'formField.edit': typeof EditFormFieldHandler;
        'formField.move': typeof MoveFormFieldHandler;
        'formField.remove': typeof RemoveFormFieldHandler;
        'id.updateClaim': typeof UpdateIdClaimHandler;
        'key.updateClaim': typeof UpdateKeyClaimHandler;
        'path.updateClaim': typeof UpdatePathClaimHandler;
    };
    addFormField(attrs: any, targetFormField: any, targetIndex: any): any;
    editFormField(formField: any, properties: any, value: any): void;
    moveFormField(formField: any, sourceFormField: any, targetFormField: any, sourceIndex: any, targetIndex: any, sourceRow: any, targetRow: any): void;
    removeFormField(formField: any, sourceFormField: any, sourceIndex: any): void;
    claimId(formField: any, id: any): void;
    unclaimId(formField: any, id: any): void;
    claimKey(formField: any, key: any): void;
    unclaimKey(formField: any, key: any): void;
    claimPath(formField: any, path: any): void;
    unclaimPath(formField: any, path: any): void;
}
export namespace Modeling {
    let $inject: string[];
}
import { AddFormFieldHandler } from './cmd/AddFormFieldHandler';
import { EditFormFieldHandler } from './cmd/EditFormFieldHandler';
import { MoveFormFieldHandler } from './cmd/MoveFormFieldHandler';
import { RemoveFormFieldHandler } from './cmd/RemoveFormFieldHandler';
import { UpdateIdClaimHandler } from './cmd/UpdateIdClaimHandler';
import { UpdateKeyClaimHandler } from './cmd/UpdateKeyClaimHandler';
import { UpdatePathClaimHandler } from './cmd/UpdatePathClaimHandler';
