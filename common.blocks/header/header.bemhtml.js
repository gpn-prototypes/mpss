block('header')({ addMix: [{ block: 'decorator', mods: { 'space-h': '2xl' } }] });
block('header').tag()('header');
block('header').content()(function() {
	let _ctx = this.ctx;

	return [
		{
			elem: 'left-side',
			content: [
				{
					block: 'pt-icon-plus',
					mods: { 'vertical-align': 'center' },
					mix: { block: 'decorator', mods: { 'indent-r': '5xl' } },
					content: [
						// {
						// 	tag: 'a',
						// 	attrs: { 'data-name': 'ServiceMenuPopup' },
						// 	block: 'icon',
						// 	mods: { size: 'm', view: 'primary', name: 'hamburger' },
						// 	mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'xs' } },
						// 		  { block: 'popup', elem: 'action' }]
						// },
						{
							block: 'text',
							mods: { size: 'l', view: 'primary', weight: 'semibold', 'line-height': 's' },
							content: 'МПСС'
						}
					]
				},
				{
					block: 'search',
					size: 'm',
					placeholder: 'Поиск модели',
					mix: { block: 'decorator', mods: { 'indent-r': '3xl' } }
				},
				{
					tag: 'a',
					attrs: { href: '#' },
					block: 'text',
					mods: { size: 'm', view: 'link' },
					mix: [
						{ block: 'decorator', mods: { 'indent-r': '2xl' }},
						{ block: 'header', elem: 'item', elemMods: { state: 'active' }, }
					],
					content: 'Модели'
				},
				// {
				// 	// tag: 'a',
				// 	// attrs: { href: '#' },
				// 	block: 'text',
				// 	mods: { size: 'm', view: 'Secondary', display: 'inline-block' },
				// 	mix: [
				// 		{ block: 'decorator', mods: { 'indent-r': '2xl' }},
				// 		{ block: 'header', elem: 'item' }
				// 	],
				// 	content: [
				// 		'Объекты',
				// 		{
				// 			block: 'text',
				// 			mods: { size: 'xs', view: 'ghost', transform: 'uppercase', display: 'inline-block' },
				// 			mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
				// 			content: 'Скоро'
				// 		},
				// 	]
				// },
			]
		},
		{
			elem: 'right-side',
			content: [
				// {
				// 	tag: 'a',
				// 	attrs: { href: '#' },
				// 	block: 'icon',
				// 	mods: { size: 'm', view: 'primary', name: 'chat' }
				// },
				// {
				// 	tag: 'a',
				// 	attrs: { href: 'https://mail.gazprom-neft.ru/owa/' },
				// 	block: 'icon',
				// 	mods: { size: 'm', view: 'primary', name: 'mail' },
				// 	mix: { block: 'decorator', mods: { 'indent-l': 'xl' } }
				// },
				// {
				// 	block: 'user',
				// 	size: 'm',
				// 	name: 'Алефтина Сергеева',
				// 	// status: 'away',
				// }
				{
					tag: 'button',
					block: 'button',
					mods: { view: 'primary', size: 'm' },
					content: [
						{ block: 'icon', mods: { 'name': 'close' }},
						'Создать новую модель'
					]
				},
			]
		}
	]
});


// mods: { view: 'half' }
