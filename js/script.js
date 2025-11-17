const locationsData = [
    {
        categoryName: '박물관',
        places: [
            {
                id: 'gimpo-aviation-museum',
                name: '김포항공박물관',
                description: '국립항공박물관은 대한민국 항공의 역사와 발전을 한눈에 볼 수 있는 곳입니다. 다양한 항공기 실물과 체험 시설을 갖추고 있습니다.',
                homepage: 'https://www.aviation.or.kr/',
                gallery: ['https://via.placeholder.com/600x400.png/AABBCC/000000?text=Aviation+Museum'],
                food: '박물관 내부에 카페가 있으며, 주변에 공항신도시의 다양한 식당들이 있습니다.',
                tips: '상설전시는 무료로 관람할 수 있으나, 일부 체험시설은 사전 예약이 필요합니다. 주차 공간이 협소할 수 있으니 대중교통 이용을 추천합니다.'
            },
            {
                id: 'seodaemun-natural-history-museum',
                name: '서대문자연사박물관',
                description: '지구의 탄생부터 인류의 출현까지, 다양한 자연의 역사를 전시하고 있는 박물관입니다. 공룡 골격 화석 등이 주요 볼거리입니다.',
                homepage: 'https://namu.sdm.go.kr/',
                gallery: ['https://via.placeholder.com/600x400.png/CCDDEE/000000?text=Natural+History+Museum'],
                food: '박물관 내에는 식당이 없으나, 인근 홍제동이나 연희동에 맛집이 많습니다.',
                tips: '어린이를 위한 체험 프로그램이 잘 되어 있어 인기가 많습니다. 주말 방문 시 온라인으로 미리 예매하는 것이 좋습니다.'
            }
        ]
    },
    {
        categoryName: '놀이공원',
        places: [
            {
                id: 'lotte-world',
                name: '롯데월드',
                description: '실내와 실외 어드벤처로 구성된 대규모 테마파크입니다. 다양한 놀이기구와 퍼레이드, 공연을 즐길 수 있습니다.',
                homepage: 'https://adventure.lotteworld.com/',
                gallery: ['https://via.placeholder.com/600x400.png/FFDDDD/000000?text=Lotte+World+Castle'],
                food: '파크 내에 수많은 레스토랑, 스낵바, 카페가 있어 선택의 폭이 넓습니다.',
                tips: '방문객이 많은 편이므로, 어트랙션 대기시간을 줄여주는 매직패스를 활용하는 것을 추천합니다. 시즌별로 다양한 축제가 열리니 미리 확인해보세요.'
            },
            {
                id: 'everland',
                name: '에버랜드',
                description: '대한민국 최대 규모의 테마파크로, 스릴 넘치는 어트랙션과 아름다운 정원, 그리고 동물원까지 함께 즐길 수 있는 곳입니다.',
                homepage: 'https://www.everland.com/',
                gallery: ['https://via.placeholder.com/600x400.png/98FB98/000000?text=Everland+T-Express'],
                food: '한식, 중식, 양식 등 세계 각국의 음식을 맛볼 수 있는 레스토랑이 즐비합니다. 츄러스와 닭꼬치 등 인기 간식도 많습니다.',
                tips: '스마트 예약을 통해 어트랙션 대기 시간을 줄일 수 있습니다. T익스프레스는 가장 인기가 많은 놀이기구 중 하나이니 오전에 먼저 탑승하는 것을 추천합니다.'
            }
        ]
    },
    {
        categoryName: '쇼핑센터',
        places: [
            {
                id: 'dasan-hyundai-outlet',
                name: '다산 현대 프리미엄아울렛',
                description: '북유럽 감성의 아름다운 건축물과 함께 쇼핑을 즐길 수 있는 곳입니다. 다양한 브랜드와 맛집, 그리고 아이들을 위한 놀이 공간이 마련되어 있습니다.',
                homepage: 'https://www.ehyundai.com/storedasan/main/dp/main.do',
                gallery: ['https://via.placeholder.com/600x400.png/87CEEB/000000?text=Dasan+Outlet+View'],
                food: '유명 맛집들이 입점해 있는 푸드코트와 다양한 카페가 있어 쇼핑과 식사를 함께 즐기기 좋습니다.',
                tips: '주말에는 방문객이 많아 주차에 시간이 걸릴 수 있습니다. 아이들을 위한 회전목마와 놀이터가 인기가 많습니다.'
            },
            {
                id: 'gimpo-hyundai-outlet',
                name: '김포 현대 아울렛',
                description: '아라뱃길을 바라보며 쇼핑을 즐길 수 있는 프리미엄 아울렛입니다. 해외 명품 브랜드부터 국내 브랜드까지 다양한 상품을 만나볼 수 있습니다.',
                homepage: 'https://www.ehyundai.com/storegimpo/main/dp/main.do',
                gallery: ['https://via.placeholder.com/600x400.png/B0E0E6/000000?text=Gimpo+Outlet+Canal'],
                food: '다양한 식당과 카페가 입점해 있으며, 특히 강을 바라보며 식사할 수 있는 레스토랑이 인기가 많습니다.',
                tips: '아울렛 주변에 아라뱃길 자전거 도로가 있어 쇼핑과 함께 라이딩을 즐길 수 있습니다. 저녁 시간에는 야경이 아름답습니다.'
            },
            {
                id: 'paju-shinsegae-outlet',
                name: '파주 신세계아울렛',
                description: '이국적인 분위기의 건축물 사이에서 쇼핑을 즐길 수 있는 곳입니다. 넓은 공간과 다양한 브랜드 구성으로 많은 사람들이 찾습니다.',
                homepage: 'https://www.premiumoutlets.co.kr/paju/ko',
                gallery: ['https://via.placeholder.com/600x400.png/D8BFD8/000000?text=Paju+Outlet+Center'],
                food: '푸드코트와 전문 식당가에 다양한 메뉴가 준비되어 있습니다. 회전목마 근처에 있는 스낵바도 인기가 좋습니다.',
                tips: '주변에 헤이리 예술마을, 프로방스 마을 등 함께 둘러볼 만한 관광지가 많습니다. 주말에는 주차장이 매우 넓지만 일찍 방문하는 것이 좋습니다.'
            }
        ]
    },
    {
        categoryName: '캠핑장',
        places: [
            {
                id: 'jarasum-camping',
                name: '자라섬 오토캠핑장',
                description: '북한강변에 위치한 국내 최대 규모의 친환경 오토캠핑장입니다. 넓은 부지와 잘 갖춰진 편의시설로 유명합니다.',
                homepage: 'https://www.jarasumworld.net/',
                gallery: ['https://via.placeholder.com/600x400.png/228B22/FFFFFF?text=Jarasum+Riverside'],
                food: '캠핑장 내 매점에서 기본적인 물품을 구매할 수 있습니다. 직접 요리하는 바베큐가 캠핑의 가장 큰 즐거움입니다.',
                tips: '매년 재즈 페스티벌 등 다양한 축제가 열리는 곳이므로, 방문 전 행사 일정을 확인하는 것이 좋습니다. 예약 경쟁이 치열하니 미리 서두르세요.'
            },
            {
                id: 'hantangang-camping',
                name: '한탄강 오토캠핑장',
                description: '한탄강 관광지 내에 위치하여, 캠핑과 함께 주변 관광을 즐길 수 있는 곳입니다. 캐라반, 캐빈 등 다양한 형태의 숙소가 마련되어 있습니다.',
                homepage: 'https://www.hantangang.kr/',
                gallery: ['https://via.placeholder.com/600x400.png/4682B4/FFFFFF?text=Hantangang+River+View'],
                food: '캠핑장 내 식당과 매점이 있으며, 가까운 전곡읍내에서 다양한 음식을 맛보거나 장을 볼 수 있습니다.',
                tips: '한탄강 지질공원, 전곡리 선사유적지 등 주변에 볼거리가 많아 아이들 교육에도 좋습니다. 여름철 물놀이 장소로도 인기가 많습니다.'
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const locationMenu = document.getElementById('location-menu');
    const mainContent = document.getElementById('main-content');

    function findLocationById(locationId) {
        for (const category of locationsData) {
            const foundPlace = category.places.find(place => place.id === locationId);
            if (foundPlace) {
                return foundPlace;
            }
        }
        return null;
    }

    function renderContent(locationId) {
        const location = findLocationById(locationId);
        if (!location) {
            mainContent.innerHTML = '<p class="text-center">메뉴에서 장소를 선택해주세요.</p>';
            return;
        }

        // Now expects a single image URL in the gallery array
        const representativeImageHtml = location.gallery.length > 0 ?
            `<img src="${location.gallery[0]}" class="img-fluid representative-photo" alt="${location.name} 대표사진">` : '';

        let homepageButtonHtml = '';
        if (location.homepage) {
            homepageButtonHtml = `
                <a href="${location.homepage}" target="_blank" class="btn btn-primary homepage-btn">
                    공식 홈페이지 방문하기
                </a>
            `;
        }

        mainContent.innerHTML = `
            <h2>${location.name}</h2>
            <p>${location.description}</p>
            ${homepageButtonHtml}
            
            <h3>대표사진</h3>
            <div class="text-center">
                ${representativeImageHtml}
            </div>

            <h3>먹거리</h3>
            <p>${location.food}</p>

            <h3>방문 팁</h3>
            <p>${location.tips}</p>
        `;
    }

    function renderMenu() {
        locationMenu.innerHTML = locationsData.map((category, index) => {
            const categoryId = `category-${index}`;
            const isFirstCategory = index === 0;

            const placesHtml = category.places.map(place => `
                <a href="#" class="list-group-item list-group-item-action location-item" data-id="${place.id}">
                    ${place.name}
                </a>
            `).join('');

            // Handle empty categories
            if (category.places.length === 0) {
                return `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading-${categoryId}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${categoryId}" aria-expanded="false" aria-controls="collapse-${categoryId}">
                                ${category.categoryName}
                            </button>
                        </h2>
                        <div id="collapse-${categoryId}" class="accordion-collapse collapse" aria-labelledby="heading-${categoryId}" data-bs-parent="#location-menu">
                            <div class="list-group list-group-flush">
                                <span class="list-group-item">추가될 예정입니다.</span>
                            </div>
                        </div>
                    </div>
                `;
            }

            return `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading-${categoryId}">
                        <button class="accordion-button ${isFirstCategory ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${categoryId}" aria-expanded="${isFirstCategory}" aria-controls="collapse-${categoryId}">
                            ${category.categoryName}
                        </button>
                    </h2>
                    <div id="collapse-${categoryId}" class="accordion-collapse collapse ${isFirstCategory ? 'show' : ''}" aria-labelledby="heading-${categoryId}" data-bs-parent="#location-menu">
                        <div class="list-group list-group-flush">
                            ${placesHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    locationMenu.addEventListener('click', (e) => {
        const target = e.target.closest('.location-item');
        if (target) {
            e.preventDefault();
            const locationId = target.dataset.id;

            // Update active state
            const currentActive = locationMenu.querySelector('.location-item.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            target.classList.add('active');

            renderContent(locationId);
        }
    });

    // Initial render
    renderMenu();
    const firstPlace = locationsData.find(cat => cat.places.length > 0)?.places[0];
    if (firstPlace) {
        renderContent(firstPlace.id);
        // Set the first item as active
        const firstMenuItem = locationMenu.querySelector(`[data-id="${firstPlace.id}"]`);
        if (firstMenuItem) {
            firstMenuItem.classList.add('active');
        }
    } else {
        renderContent(null); // Show welcome message
    }
});
