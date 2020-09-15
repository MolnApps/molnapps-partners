import Partners from './../src/Partners.js'

describe ('Parners', () => {
	it('can be instantiated', () => {
		let myHeader = new Partners;
		expect(myHeader).not.toBeNull()
	})

	it ('returns no header by default', () => {
		let myHeader = new Partners;
		let markup = myHeader.get()
		expect(markup).toContain('class="Partners__container"')
		expect(markup).not.toContain('class="Partners__header"')
	})

	describe ('it is attached to the dom', () => {
		it ('if body contains Partners__isHome div', () => {
			document.body.innerHTML = '<div class="Partners__isHome">Foo</div>';
			
			let myHeader = new Partners;
			
			appendHeader(myHeader)

			expect(document.body.innerHTML).not.toContain('Part of')
			expect(document.body.innerHTML).toContain('Foo')

			myHeader.attach()
			
			expect(document.body.innerHTML).toContain('Part of')
			expect(document.body.innerHTML).toContain('Foo')
		})

		it ('if body does not contain Partners__isHome div', () => {
			document.body.innerHTML = '<div>Foo</div>';
			
			let myHeader = new Partners;
			
			appendHeader(myHeader)

			expect(document.body.innerHTML).not.toContain('Part of')
			expect(document.body.innerHTML).toContain('Foo')

			myHeader.attach()
			
			expect(document.body.innerHTML).not.toContain('Part of')
			expect(document.body.innerHTML).toContain('Foo')
		})

		it ('can be detached', () => {
			document.body.innerHTML = '<div class="Partners__isHome">Foo</div>';
			
			let myHeader = new Partners

			appendHeader(myHeader)

			myHeader.attach()
			
			expect(document.body.innerHTML).toContain('Part of')
			expect(document.body.innerHTML).toContain('Foo')

			myHeader.detach()

			expect(document.body.innerHTML).not.toContain('Part of')
			expect(document.body.innerHTML).toContain('Foo')
		})
	})

	describe ('appends a header', () => {
		it ('customizes all attributes', () => {
			let myHeader = new Partners;
			
			myHeader.register({
				url: '#',
				logo: {
					src: '_img/logo.svg', 
					width: 100, 
					height: 23
				},
				classModifier: 'rsh',
				company: 'Re Solution Hub'
			})
			
			expect(myHeader.get()).toContain('Part of')
			expect(myHeader.get()).toContain('href="#"')
			expect(myHeader.get()).toContain('src="_img/logo.svg"')
			expect(myHeader.get()).toContain('width="100"')
			expect(myHeader.get()).toContain('height="23"')
			expect(myHeader.get()).toContain('Re Solution Hub')
			expect(myHeader.get()).toContain('class="Partners__header Partners__header--rsh"')
		})

		it ('appends a header at the bottom by default', () => {
			let myHeader = new Partners;
			
			myHeader.register({
				url: '#',
				logo: {
					src: '_img/logo.svg', 
					width: 100, 
					height: 23
				},
				classModifier: 'bbcp',
				company: 'Partners'
			})

			myHeader.register({
				url: '#',
				logo: {
					src: '_img/logo.svg', 
					width: 100, 
					height: 23
				},
				classModifier: 'rsh',
				company: 'Re Solution Hub'
			})
			
			let markup = myHeader.get()
			expect(
				markup.indexOf('Partners__header--bbcp')
			).toBeLessThan(
				markup.indexOf('Partners__header--rsh')
			)
		})

		it ('appends a header at the top', () => {
			let myHeader = new Partners;

			myHeader.register({
				url: '#',
				logo: {
					src: '_img/logo.svg', 
					width: 100, 
					height: 23
				},
				classModifier: 'bbcp',
				company: 'Partners'
			})
			
			myHeader.register({
				url: '#',
				logo: {
					src: '_img/logo.svg', 
					width: 100, 
					height: 23
				},
				classModifier: 'rsh',
				company: 'Re Solution Hub'
			}, 'top')
			
			let markup = myHeader.get()
			expect(
				markup.indexOf('Partners__header--rsh')
			).toBeLessThan(
				markup.indexOf('Partners__header--bbcp')
			)
		})

		it ('appends a header if already attached', () => {
			document.body.innerHTML = '<div class="Partners__isHome">Foo</div>';

			let myHeader = new Partners;
			
			myHeader.attach()

			expect(document.body.innerHTML).not.toContain('Partners__header--rsh')

			myHeader.register({
				url: '#',
				logo: {
					src: '_img/logo.svg', 
					width: 100, 
					height: 23
				},
				classModifier: 'rsh',
				company: 'Re Solution Hub'
			})
			
			expect(document.body.innerHTML).toContain('Partners__header--rsh')
		})
	})

	describe ('default parameters', () => {
		it ('part of', () => {
			let myHeader = new Partners;
			
			myHeader.register({})
			
			expect(myHeader.get()).toContain('Part of')
		})

		it ('provides default url', () => {
			let myHeader = new Partners;
			
			myHeader.register({})
			
			expect(myHeader.get()).toContain('href="#"')
		})

		it ('provides default logo width and height', () => {
			let myHeader = new Partners;
			
			myHeader.register({
				logo: {
					src: '_img/logo.svg'
				}
			})
			
			expect(myHeader.get()).toContain('<img src="_img/logo.svg" width="" height="" />')
		})

		it ('provides default class modifier', () => {
			let myHeader = new Partners;
			
			myHeader.register({})
			
			expect(myHeader.get()).toContain('class="Partners__header Partners__header--default"')
		})

		it ('provides default class modifier', () => {
			let myHeader = new Partners;
			
			myHeader.register({})

			expect(myHeader.get()).not.toContain('<img src="undefined" width="" height="" />')
		})
	})

	let appendHeader = (myHeader) => {
		myHeader.register({
			url: '#',
			logo: {
				src: '_img/logo.svg', 
				width: 100, 
				height: 23
			},
			classModifier: 'mp',
			company: 'My partner'
		})
	}
})