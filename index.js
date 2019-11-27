class Vue {
    constructor({
        el
    }) {
        this.$el = document.getElementById(el)
        this.$data = {}
        this.template = this.$el.innerHTML
        this.$map = {}
        Object.defineProperty(this, 'data', {
            get: () => {
                return this.$data;
            },
            set: (val) => {
                this.$data = val;
                this.render()
            }

        });
    }

    render() {
        let template = this.template
        template = template.replace('{{', '')
        template = template.replace('}}', '')

        for (let k in this.$data) {
            template = template.replace(new RegExp(k, 'g'), this.$data[k])
        }

        this.$el.innerHTML = template
        this.$el.querySelector('input').oninput = (e) => this.changeVal(e.target.value)
    }
    changeVal(val) {
            this.data = {
                ...this.data,
                age: val
            }
            this.$el.querySelector('input').focus()
    }


   
}