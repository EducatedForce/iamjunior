import styles from "./BusinessImagesGallery.module.scss";

type BusinessImagesGalleryProps = {
	business: Business;
};

const BusinessImagesGallery = ({ business }: BusinessImagesGalleryProps) => {
	return (
		<div className={styles.businessGallery}>
			<h2>Gallery</h2>
			<div className={styles.galleryImages}>
				{business.images.map((image, index) => (
					<div className={styles.businessImageContainer} key={`img-${index}`}>
						<img src={image.url} alt={`${business.name} image ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default BusinessImagesGallery;
