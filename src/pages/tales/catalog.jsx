import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../catalog/catalog.css';

function Tales() {
    const [dbInfo, setDbInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("Fairytales");

    const navigate = useNavigate();

    const fetchData = (page = 1, species) => {
        setLoading(true);

        let url = `http://localhost:5000/paintings?category=2&page=${page}`;

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
	
	 const handlePageChange = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
	
    const [imgError, setImgError] = useState({});
    useEffect(() => {
        console.log("Received painting ids:", dbInfo.map(a => a.categoryid));
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
                                        src={painting.imagelink ? `http://localhost:5000/image/${painting.imagelink}` : '/placeholder.jpg'}
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
				
				<div className="pagination fade-in-up">
                    <button disabled={currentPage === 1} onClick={() => handlePageChange('prev')}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => handlePageChange('next')}>Next</button>
                </div>
                
            </div>
        </div>
    );
}

export default Tales;