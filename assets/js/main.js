
this.calculateYoutubeLayout = () => {
    const screenWidth = window.innerWidth;

    let layoutInfo = {
        height: 122,
        top: 11,
    }
  
    if (screenWidth > 1158) {
        const heightSlope = (200 - 160) / (2289 - 1833);
        const heightIntercept = 200 - heightSlope * 2289;
        layoutInfo.height = Math.floor(heightSlope * screenWidth + heightIntercept);
        
        const topSlope = (51 - 26) / (2301 - 1730);
        const topIntercept = 51 - topSlope * 2301;
        layoutInfo.top  = Math.floor(topSlope * screenWidth + topIntercept);
    }
  
    return layoutInfo;
}

this.calculateYoutubeContainerHeight = () => {
    const screenWidth = window.innerWidth;
    let containerHeight = 645;

    if (screenWidth < 1158) {
        const slope = (570 - 425) / (1030 - 767);
        const intercept = 570 - slope * 1030;
        containerHeight = Math.floor(slope * screenWidth + intercept);
    }

    return containerHeight;
}


window.addEventListener('load', function() {
    // Youtube video
    let video = this.document.querySelector('.youtube');
    let videoSection = this.document.querySelector('.video-section');
    if (video) {
        if (window.innerWidth > 767) {
            video.style.height = `${this.calculateYoutubeLayout().height}%`;
            video.style.top = `-${this.calculateYoutubeLayout().top}%`;
            videoSection.style.height = `${this.calculateYoutubeContainerHeight()}px`;
        }
    
        this.window.addEventListener('resize', () => {
            if (window.innerWidth > 767) {
                video.style.height = `${this.calculateYoutubeLayout().height}%`;
                video.style.top = `-${this.calculateYoutubeLayout().top}%`;
                videoSection.style.height = `${this.calculateYoutubeContainerHeight()}px`;
            }
        });
    }

    // FAQs
    let quests = document.getElementsByClassName('faq-quest');
    if (quests) {
        Array.from(quests).forEach((quest) => {
            quest.addEventListener('click', () => {
                quest.classList.toggle('quest-active');
                let answer = quest.nextElementSibling;
    
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }

});