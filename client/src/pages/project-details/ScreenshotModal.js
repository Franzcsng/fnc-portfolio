import './ScreenshotModal.scss'
import { useEffect } from 'react'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'

const ScreenshotModal = ({images, activeIndex, onClose, onPrev, onNext}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose, onPrev, onNext])

    return (
        <div className='screenshot-modal' onClick={onClose}>

            <button className='close-btn' onClick={onClose} aria-label='Close'>
                <IoClose/>
            </button>

            {images.length > 1 && (
                <button className='nav-btn prev' onClick={(e) => {e.stopPropagation(); onPrev()}} aria-label='Previous image'>
                    <IoChevronBack/>
                </button>
            )}

            <img
                className='modal-image'
                alt={`Screenshot ${activeIndex + 1}`}
                src={images[activeIndex]}
                onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
                <button className='nav-btn next' onClick={(e) => {e.stopPropagation(); onNext()}} aria-label='Next image'>
                    <IoChevronForward/>
                </button>
            )}

            {images.length > 1 && (
                <p className='counter'>{activeIndex + 1} / {images.length}</p>
            )}

        </div>
    )
}

export default ScreenshotModal
