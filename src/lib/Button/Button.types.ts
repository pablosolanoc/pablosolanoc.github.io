export enum ButtonTypeEnum {
	shell = 'shell',
	fill = 'fill',
	default = 'default'
}

export enum AnimationTypeEnum {
	outward = 'outward',
	inward = 'inward'
}

export const buttonTypeClasses: Record<ButtonTypeEnum, string> = {
	[ButtonTypeEnum.shell]: `
    px-10 py-3 
		my-2
    border-2 border-primary
    rounded-full
    text-primary hover:text-white
    font-bold
    shadow-xl
    hover:bg-primary
    duration-slow
    `,
	[ButtonTypeEnum.fill]: `
    px-10 py-3
    my-2
    hover:ring hover:ring-primary hover:ring-offset-0
    rounded-full
    text-white hover:text-primary 
    font-bold
    shadow-xl 
    bg-primary hover:bg-transparent
    duration-slow
    `,
	[ButtonTypeEnum.default]: ''
};
