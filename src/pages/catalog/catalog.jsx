import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './catalog.css';

function Catalog() {
    const [dbInfo, setDbInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("Cute animals");

    const navigate = useNavigate();

    const fetchData = (page = 1, species) => {
        setLoading(true);

        let url = `http://localhost:5000/paintings`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDbInfo(data.paintings);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching paintings: ', error);
                setLoading(false);
            });
    };
	
	useEffect(() => {
        fetchData(currentPage, selectedCategory);
    }, [currentPage, selectedCategory]);
	
    const [imgError, setImgError] = useState({});
    useEffect(() => {
        console.log("Received painting ids:", dbInfo.map(a => a.category_id));
    }, [dbInfo]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="catalog">
            <title>Catalog</title>

            <div className="decorations">
                {[...Array(17)].map((_, i) => <div key={i} className={`square-${i + 1}`}></div>)}
                {[...Array(5)].map((_, i) => <p key={i} className={`paws-${i + 1}`}>🐾</p>)}
            </div>
            <div className={`catalog-content ${showFilter ? 'blur' : ''} fade-in`}>
                <div className="catalog-items">
                    {loading ? (
                        <p className="fade-in-up" style={{ fontSize: "24px", marginTop: "20px" }}>Loading paintings...</p>
                    ) : (

                        dbInfo.map((painting, index) => (
                            <div key={painting.id} className="pet-cards catalog-appear" style={{ animationDelay: `${index * 50}ms` }}>

                                <div className="pet-image-wrapper">

                                    {imgError[painting.id] && (
                                        <div className="animal-alt-overlay">
                                            {painting.name || 'No photo'}
                                        </div>
                                    )}

                                    <img
                                        src={painting.image_link ? `http://localhost:5000/image/${painting.image_link}` : '/placeholder.jpg'}
                                        // alt={animal.name || 'No photo'}
                                        className="pet-image"
                                        onError={() =>
                                            setImgError(prev => ({ ...prev, [painting.id]: true }))
                                        }
                                    />
                                </div>

                                <div className="pet-info">
                                    <div className="pet-breed-age">
                                        {painting.name != null && <span>{painting.name}</span>}
                                        {painting.height?.cm && <span> • {painting.height.cm}</span>}
										{painting.width?.cm && <span>x{painting.width.cm} cm </span>}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                
            </div>
        </div>
    );
}

export default Catalog;