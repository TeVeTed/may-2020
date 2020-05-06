export interface IArticle {
	Body: string;
	Id?: number;
	ID?: number;
	LikesCount?: number;
	NumCommentsId?: number;
	PostCategory?: {
		results: Array<{Id: number}>;
	};
	PublishedDate?: string;
	Title: string;
	eventDate?: string;
	showButton?: boolean;
	showgallery?: boolean;
	teather?: string;
	teatherPic?: {
		Description: string;
		Url: string;
	};
};
