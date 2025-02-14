import { ImageCard } from "./imageCard"
import { useFetchGif } from "../hooks/useFetchGif"

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGif(category)
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <p>Loading...</p>
            }
                <div className="card-grid">
                    {
                        images.map( (image) => {
                            return <ImageCard key={image.id} {...image}></ImageCard>
                        })
                    }
                </div>
        </>
    )
}
