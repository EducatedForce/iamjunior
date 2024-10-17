declare global {
	interface User {
		_id?: string;
		userName: string;
		email: string;
		createdAt?: string;
		updatedAt?: string;
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
		category: string;
		contactPerson: string;
		email: string;
		images: { url: string }[];
	}

	interface Booking {
		_id?: string | number;
		businessId: number;
		businessName: string;
		categoryName: string;
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
