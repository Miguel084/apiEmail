class FormSubmit{
    constructor(settigns){
        this.settigns = settigns;
        this.form = document.querySelector(settigns.form);
        this.formButton = document.querySelector(settigns.button);

        if(this.form){
            this.url = this.form.getAttribute("action")
        }

    }

    displaySuccess(){
        this.form.innerHTML = this.settigns.success;

    }

    displayError(){
        this.form.innerHTML = this.settigns.error;
    }
    
    int(){
        if (this.form) this.formButton.addEventListener("click",()=> this.displaySuccess());
        return this;
    }

}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class = 'sucesso'>Mensagem enviada!</h1>",
    error: "<h1 class = 'erro'>Erro ao enviar mensagem!</h1>",
});