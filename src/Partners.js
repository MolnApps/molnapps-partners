class Partners {
	constructor () {
		this.attached = false
		this.partners = []
		this.template = `
			<div class="Partners__header Partners__header--{classModifier}">
				<a href="{url}">
					<span class="Partners__part">
						<span>Part of</span>
						{logo}
					</span> 
					<span class="Partners__company">{company}</span>
				</a>
			</div>
		`;
		this.logoTemplate = `<img src="{logo.src}" width="{logo.width}" height="{logo.height}" />`
		this.container = document.createElement('div.Partners__container')
	}
	
	register (partner, position = '') {
		console.log('register partner')

		let shouldAttachAgain = false
		
		if (this.attached) {
			this.detach()
			shouldAttachAgain = true
		}

		partner = this.setPartnerDefaults(partner)

		if (position == 'top') {
			this.partners.unshift(partner);
		} else {
			this.partners.push(partner)
		}

		if (shouldAttachAgain) {
			this.attach()
		}
	}

	setPartnerDefaults(partner)
	{
		partner = Object.assign({
			classModifier: 'default', 
			url: '#'
		}, partner)
		
		partner.logo = Object.assign({
			src: '',
			width: '', 
			height: ''
		}, partner.logo ? partner.logo : {});

		return partner;
	}
	
	get () {
		let html = [];
		this.partners.forEach((partner) => {
			let markup = this.template
				.replace('{url}', partner.url)
				.replace(
					'{logo}', 
					partner.logo.src ? this.logoTemplate : ''
				)
				.replace('{logo.src}', partner.logo.src)
				.replace('{logo.width}', partner.logo.width)
				.replace('{logo.height}', partner.logo.height)
				.replace('{company}', partner.company)
				.replace('{classModifier}', partner.classModifier);
			html.push(markup);
		})
		return '<div class="Partners__container">' + html.join('') + '</div>';
	}

	attach () {
		if ( ! document.querySelector('div.Partners__isHome')) {
			return;
		}
		
		this.container.innerHTML = this.get()
		document.body.insertAdjacentElement('afterbegin', this.container)
		this.attached = true
	}

	detach () {
		document.body.removeChild(this.container)
		this.attached = false
	}
}

export default Partners;