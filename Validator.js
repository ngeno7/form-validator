export class Validator {

    errors  = new Array();
    formData;
    metaFields;

    constructor(formData, metaFields) {

        this.formData = formData;

        this.metaFields = metaFields;
    }

    validate () {

        for (const metaField of this.metaFields) {

            if (metaField.check == 'required' && !this.formData[metaField.field]) {

                this.errors.push({ field: metaField.field, message: `${metaField.name} is required.` });
            }

            if (metaField.check == 'confirmed' && this.formData[metaField.field] !== this.formData[metaField.field2]) {

                this.errors.push({ field: metaField.field, message: `${metaField.name} not validly confirmed.` });
            }

            if (metaField.check == 'greatorThanZero' && ( !this.formData[metaField.field] || parseFloat(this.formData[metaField.field]) <= 0 )) {

                this.errors.push({ field: metaField.field, message: `${metaField.name} should be greator than zero.` });
            }

            if (metaField.check == 'ArrayHasItems' && Array.isArray(this.formData[metaField.field]) && !this.formData[metaField.field].length) {

                this.errors.push({ field: metaField.field, message: `${metaField.name} should contain more than 1 item.` });
            }

            if(metaField.check =='shouldContainAtmost2Letters') {

                if(!this.formData[metaField.field]) {
                    this.errors.push({ field: metaField.field, message: `Invalid ${metaField.name}.` });
                }

                if(this.formData[metaField.field] && Array(...this.formData[metaField.field]).filter(char => String(char).match(/[a-zA-Z]/)).length > 2) {
                    this.errors.push({ field: metaField.field, message: `Invalid ${metaField.name}.` });
                }
            }

        }

        if(this.errors.length) {

            return Promise.reject(this.errors);
        }

        return Promise.resolve();
    }
}
