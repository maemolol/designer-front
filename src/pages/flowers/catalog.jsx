import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../catalog/catalog.css';

function Flowers() {
    const [dbInfo, setDbInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Fairytales");
    const [showModal, setShowModal] = useState(false);
    const [activePainting, setActivePainting] = useState(null);

    const openModal = (painting) => {
        setActivePainting(painting);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setActivePainting(null);
    };

    const navigate = useNavigate();

    const fetchData = (page = 1) => {
        setLoading(true);

        let url = `http://localhost:5000/paintings?category=4&page=${page}`;

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
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!showModal) {
        document.body.style.overflow = '';
        return;
        }
        document.body.style.overflow = 'hidden';
        const onKeyDown = (e) => {
        if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeyDown);
        };
    }, [showModal]);

    return (
        <div className="catalog">
        <title>Catalog</title>

        <div className={`catalog-content ${showFilter ? 'blur' : ''} fade-in`}>
            <div className="catalog-items">
            {loading ? (
                <p className="fade-in-up" style={{ fontSize: "24px", marginTop: "20px" }}>
                Loading paintings...
                </p>
            ) : (
                dbInfo.map((painting, index) => (
                <div
                    key={painting.id}
                    className="pet-cards catalog-appear"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <div className="pet-image-wrapper">
                    {imgError[painting.id] && (
                        <div className="animal-alt-overlay">
                        {painting.name || 'No photo'}
                        </div>
                    )}

                    <img
                        src={
                        painting.imagelink
                            ? `http://localhost:5000/image/${painting.imagelink}`
                            : '/placeholder.jpg'
                        }
                        className="pet-image"
                        onError={() =>
                        setImgError(prev => ({ ...prev, [painting.id]: true }))
                        }
                        onClick={() => openModal(painting)}
                        style={{ cursor: 'pointer' }}
                        alt={painting.name || 'Painting'}
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

        {showModal && activePainting && (
            <div
            role="dialog"
            aria-modal="true"
            aria-label={activePainting.name ? `Image of ${activePainting.name}` : 'Image modal'}
            onClick={closeModal}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000
            }}
            >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                position: "relative",
                background: "#fff",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                maxWidth: "90%",
                maxHeight: "90%",
                }}
            >
                <button
                onClick={closeModal}
                aria-label="Close image"
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                >
                ✕
                </button>

                <img
                src={
                    activePainting.imagelink
                    ? `http://localhost:5000/image/${activePainting.imagelink}`
                    : '/placeholder.jpg'
                }
                alt={activePainting.name || 'Painting'}
                style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    borderRadius: "8px",
                    display: 'block'
                }}
                />

                {activePainting.name && (
                <div style={{ marginTop: '8px', textAlign: 'center', fontWeight: 600 }}>
                    {activePainting.name}
                </div>
                )}
            </div>
            </div>
        )}
        </div>
    );
}

export default Flowers;