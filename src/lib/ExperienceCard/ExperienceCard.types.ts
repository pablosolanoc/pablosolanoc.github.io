export type ExperienceEntry = {
	name: string;
	color: string;
	bgColor: string;
	logo: string;
	roles: ExperienceEntryRole[];
};

export type ExperienceEntryRole = {
	roleName: string;
	timeRange: string[];
};
