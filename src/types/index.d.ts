declare global {
	interface User {
		id: string;
		userName: string;
		email: string;
		token: string;
		isAdmin?: boolean;
	}

	interface Category {
		_id?: string | number;
		name: string;
		backgroundColor: string;
		iconUrl: string;
	}

	interface Business {
		_id: string | number;
		name: string;
		description: string;
		address: string;
		categoryId: string;
		contactPerson: string;
		email: string;
		images: { url: string }[];
	}

	interface Booking {
		_id?: string | number;
		businessId: number;
		date: Date;
		time: string;
		userEmail: string;
		userName: string;
		status: string;
	}

	interface CategoryCardProps extends Category {
		type?: "primary" | "secondary";
		active?: boolean;
	}

	type BusinessCardProps = Business;
}
export {};
