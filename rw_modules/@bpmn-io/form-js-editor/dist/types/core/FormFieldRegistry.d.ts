export class FormFieldRegistry extends BaseFieldRegistry {
    /**
     * Updates a form fields id.
     *
     * @param {Object} formField
     * @param {string} newId
     */
    updateId(formField: any, newId: string): void;
    /**
     * Validate the suitability of the given id and signals a problem
     * with an exception.
     *
     * @param {string} id
     *
     * @throws {Error} if id is empty or already assigned
     */
    _validateId(id: string): void;
}
import { FormFieldRegistry as BaseFieldRegistry } from '@bpmn-io/form-js-viewer';