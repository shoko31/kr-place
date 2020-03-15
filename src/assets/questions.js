const questions = {
  "0": [{
    "question": {
      "type": 0,
      "text": "How do you say \"Hello.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "안녕하세요. [An-nyeong-ha-se-yo.]",
      "valid": true
    }, {
      "text": "만나서 반가워요. [Man-na-seo ban-ga-weo-yo.]",
      "valid": false
    }, {
      "text": "안녕히 가세요. [An-nyeong-hi ka-se-yo.]",
      "valid": false
    }, {
      "text": "감사합니다. [Kam-sa-ham-ni-da.]",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Nice to meet you.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "만나서 반가워요. [Man-na-seo ban-ga-weo-yo.]",
      "valid": true
    }, {
      "text": "안녕히 계세요. [An-nyeong-hi gye-se-yo.]",
      "valid": false
    }, {
      "text": "감사합니다. [Kam-sa-ham-ni-da.]",
      "valid": false
    }, {
      "text": "천만해요. [Cheon-man-hae-yo.]",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"I am a teacher.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "저는 선생님이에요. [Jeo-neun seon-saeng-nim-i-e-yo.]",
      "valid": true
    }, {
      "text": "저는 학생이에요. [Jeo-neun hak-saeng-i-e-yo.]",
      "valid": false
    }, {
      "text": "저는 선생님예요. [Jeo-neun seon-saeng-nim-ye-yo.]",
      "valid": false
    }, {
      "text": "저는 가수예요. [Jeo-neun ga-su-ye-yo.]",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"How much is it?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "얼마예요? [Eol-ma-ye-yo?]",
      "valid": true
    }, {
      "text": "어디에 있어요? [Eo-di-e iss-eo-yo?]",
      "valid": false
    }, {
      "text": "아니에요? [A-ni-e-yo?]",
      "valid": false
    }, {
      "text": "이거예요? [I-geo-ye-yo?]",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Where are you going now?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "지금 어디에 가요? [Ji-geum eo-di-e ka-yo?]",
      "valid": true
    }, {
      "text": "지금 어디에 자요? [Ji-geum eo-di-e ja-yo?]",
      "valid": false
    }, {
      "text": "지금 어디에 살아요? [Ji-geum eo-di-e sar-a-yo?]",
      "valid": false
    }, {
      "text": "지금 어디에 있어요? [Ji-geum eo-di-e iss-eo-yo?]",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Kimchi is delicious.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "김치가 맛있어요.",
      "valid": true
    }, {
      "text": "김치이 맛있어요.",
      "valid": false
    }, {
      "text": "김치가 안 맛있어요.",
      "valid": false
    }, {
      "text": "김치이 안 맛있어요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"It is 3:37p.m.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "오후 세 시 삼십칠 분이에요.",
      "valid": true
    }, {
      "text": "오후 세 시 사십오 분이에요.",
      "valid": false
    }, {
      "text": "오전 세 시 이십구 분이에요.",
      "valid": false
    }, {
      "text": "오전 세 시 오십삼 분이에요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"It is Friday.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "금요일이에요.",
      "valid": true
    }, {
      "text": "목요일이에요.",
      "valid": false
    }, {
      "text": "화요일이에요.",
      "valid": false
    }, {
      "text": "일요일이에요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Where shall we meet?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "어디에서 만날까요?",
      "valid": true
    }, {
      "text": "언제 만날까요?",
      "valid": false
    }, {
      "text": "어떻게 만날까요?",
      "valid": false
    }, {
      "text": "누가 만날까요?",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "안에 = Inside",
      "valid": true
    }, {
      "text": "위에 = Under",
      "valid": false
    }, {
      "text": "뒤에 = Above",
      "valid": false
    }, {
      "text": "왼쪽 = Right sides",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "이다 = To be",
      "valid": true
    }, {
      "text": "이다 = To have",
      "valid": false
    }, {
      "text": "있다 = To be",
      "valid": false
    }, {
      "text": "이따 = To have",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "나무 = Tree",
      "valid": true
    }, {
      "text": "너무 = Tree",
      "valid": false
    }, {
      "text": "니무 = Tree",
      "valid": false
    }, {
      "text": "누무 = Tree",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"I like cakes.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "케이크를 좋아해요.",
      "valid": true
    }, {
      "text": "케이크가 맛없어요.",
      "valid": false
    }, {
      "text": "케이크를 좋아요.",
      "valid": false
    }, {
      "text": "케이크가 밋있어요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "신문 / newspaper",
      "valid": true
    }, {
      "text": "고향/ city",
      "valid": false
    }, {
      "text": "가수 / teacher",
      "valid": false
    }, {
      "text": "주말 / weekdays",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say “I only bought fruit at the store” in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "가게에서 과일밖에 안 샀어요.",
      "valid": true
    }, {
      "text": "가게에서 책밖에 샀어요.",
      "valid": false
    }, {
      "text": "서점에서 과일만 안 샀어요.",
      "valid": false
    }, {
      "text": "서점에서 책밖에 안 샀어요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say “It’s been two years since I came to Korea” in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "한국에 온 지 2년이 되었습니다.",
      "valid": true
    }, {
      "text": "한국에 여행한 지 2년이 되었습니다.",
      "valid": false
    }, {
      "text": "한국에 산 지 2년이 되었습니다.",
      "valid": false
    }, {
      "text": "한국에 적응한 지 2년 되었습니다.",
      "valid": false
    }]
  }],
  "1": [{
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "가족 = family",
      "valid": true
    }, {
      "text": "작년 = this year",
      "valid": false
    }, {
      "text": "결혼하다 = to divorce",
      "valid": false
    }, {
      "text": "싫어하다 = to love",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"How long does it take from here?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "여기에서 얼마나 걸려요?",
      "valid": true
    }, {
      "text": "저기에서 얼마나 걸려요?",
      "valid": false
    }, {
      "text": "여기에서 어떻게 걸려요?",
      "valid": false
    }, {
      "text": "얼마나 걸려요?",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Where do I get off?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "어디에서 내려요?",
      "valid": true
    }, {
      "text": "여기서 만나요?",
      "valid": false
    }, {
      "text": "지금 가요?",
      "valid": false
    }, {
      "text": "어디에서 볼까요?",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"I'm sorry that I'm late.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "늦게와서 죄송해요.",
      "valid": true
    }, {
      "text": "일찍와서 죄송해요.",
      "valid": false
    }, {
      "text": "방금와서 감사해요.",
      "valid": false
    }, {
      "text": "늦게와서 고마워요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "우체국 = post office",
      "valid": true
    }, {
      "text": "숟가락 = chopsticks",
      "valid": false
    }, {
      "text": "젓가락 = spoons",
      "valid": false
    }, {
      "text": "공항 = airplane",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Can you play tennis?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "테니스 칠 수 있어요?",
      "valid": true
    }, {
      "text": "농구를 할 수 있어요?",
      "valid": false
    }, {
      "text": "축구를 좋아해요?",
      "valid": false
    }, {
      "text": "테니스 칠 수 없어요?",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"What movie do you want to see?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "무슨 영화를 보고 싶어요?",
      "valid": true
    }, {
      "text": "어떤 드라마를 보고 싶어요?",
      "valid": false
    }, {
      "text": "어디 영화를 알고 싶어요?",
      "valid": false
    }, {
      "text": "무슨 영화를 볼 거예요?",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"010-5437-8126.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "공일공 오사삼칠 팔일이육.",
      "valid": true
    }, {
      "text": "공일공 오삼칠사 팔이이육.",
      "valid": false
    }, {
      "text": "공일공 오삼삼사 팔일이육.",
      "valid": false
    }, {
      "text": "공일공 오사삼칠 팔이삼팔.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Why don't you work out?\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "운동하는 게 어때요?",
      "valid": true
    }, {
      "text": "공부하는 게 어때요?",
      "valid": false
    }, {
      "text": "노래하는 게 어때요?",
      "valid": false
    }, {
      "text": "걷는 게 어때요?",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say \"Jake is wearing sneakers.\" in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "제이크는 운동화를 신고 있어요.",
      "valid": true
    }, {
      "text": "제이크는 운동화를 입고 있어요.",
      "valid": false
    }, {
      "text": "제이크는 운동화를 벗고 있어요.",
      "valid": false
    }, {
      "text": "제이크는 운동화를 사고 있어요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "How do you say “When I arrived at home, it was midnight.” in Korean?",
      "sub_questions": []
    },
    "answers": [{
      "text": "집에 오니까 밤 12시였어요.",
      "valid": true
    }, {
      "text": "집에 가면 밤 12시였어요.",
      "valid": false
    }, {
      "text": "집에 가니까 오전 12시였어요.",
      "valid": false
    }, {
      "text": "집에 와서 밤 오전 12시였어요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the wrong answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "대학교에 입학하려고 열심히 공부하세요.",
      "valid": true
    }, {
      "text": "대학교에 입학하려고 열심히 공부했어요.",
      "valid": false
    }, {
      "text": "대학교에 입학하기 위해서 열심히 공부하세요.",
      "valid": false
    }, {
      "text": "대학교에 입학하기 위해서 열심히 공부해야 해요.",
      "valid": false
    }, {
      "text": "대학교에 입학하기 위해서 열심히 공부했어요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "Choose the correct answer.",
      "sub_questions": []
    },
    "answers": [{
      "text": "존 씨가 저녁에 전화할 거예요.",
      "valid": true
    }, {
      "text": "저는 이제부터 날씬할게요.",
      "valid": false
    }, {
      "text": "오늘 오후에는 바람이 불게요.",
      "valid": false
    }, {
      "text": "존씨는 이제 늦지 않을게요.",
      "valid": false
    }]
  }],
  "2": [{
    "question": {
      "type": 1,
      "text": "( )에 들어갈 가장 알맞은 것을 고르십시오.",
      "sub_questions": ["게임을 ( ) 학원에 지각했다."]
    },
    "answers": [{
      "text": "하다가",
      "valid": true
    }, {
      "text": "했다가",
      "valid": false
    }, {
      "text": "하려고",
      "valid": false
    }, {
      "text": "하고",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "( )에 들어갈 가장 알맞은 것을 고르십시오.",
      "sub_questions": ["BTS 덕분에 한국을 더 좋아( )."]
    },
    "answers": [{
      "text": "하게 되었다.",
      "valid": true
    }, {
      "text": "하다.",
      "valid": false
    }, {
      "text": "했었다",
      "valid": false
    }, {
      "text": "할 것이다.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 빈칸에 공통적으로 들어갈 단어를 고르세요.",
      "sub_questions": ["ㆍ여행 ( ) 좋아해요.", "ㆍ등산 ( ) 좋아해요.", "ㆍ사냥 ( ) 좋아해요."]
    },
    "answers": [{
      "text": "하는 것을",
      "valid": true
    }, {
      "text": "하고 싶어서",
      "valid": false
    }, {
      "text": "하기 떄문에",
      "valid": false
    }, {
      "text": "하면서",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음을 순서대로 맞게 나열한 것을 고르십시오.",
      "sub_questions": ["(A) 그래서 건강에 관심이 생겼습니다.", "(B) 내일부터 학교에 걸어 다닐 겁니다.", "(C) 건강을 위해서 운동을 하려고 합니다.", "(D) 요즘 조금만 일해도 빨리 피곤해집니다."]
    },
    "answers": [{
      "text": "D-A-C-B",
      "valid": true
    }, {
      "text": "A-C-B-D",
      "valid": false
    }, {
      "text": "A-B-C-D",
      "valid": false
    }, {
      "text": "B-C-A-D",
      "valid": false
    }, {
      "text": "C-A-B-D",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음을 순서대로 맞게 나열한 것을 고르십시오.",
      "sub_questions": ["(A) 학교 앞에서 어린이 교통사고가 많이 일어납니다.", "(B) 또 어린이들이 갑자기 도로로 나올 때도 있습니다.", "(C) 그래서 학교 앞에서 운전할 때는 조심해야 합니다.", "(D) 어린이는 키가 작아서 운전할 때 잘 보이지 않습니다."]
    },
    "answers": [{
      "text": "A-D-B-C",
      "valid": true
    }, {
      "text": "A-D-C-B",
      "valid": false
    }, {
      "text": "D-C-B-A",
      "valid": false
    }, {
      "text": "A-B-C-D",
      "valid": false
    }, {
      "text": "B-C-A-D",
      "valid": false
    }]
  }, {
    "question": {
      "type": 0,
      "text": "다음 보기를 보고 “-아서/어서”를 문법적으로 맞게 사용한 것을 고르세요.",
      "sub_questions": []
    },
    "answers": [{
      "text": "자르다 -> 잘라서",
      "valid": true
    }, {
      "text": "모르다 -> 모르서",
      "valid": false
    }, {
      "text": "빠르다 -> 빠르서",
      "valid": false
    }, {
      "text": "부르다 -> 불르서",
      "valid": false
    }, {
      "text": "기르다 -> 길어서",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음중 보기를 보고 괄호( )에 들어갈 말을 고르시오.",
      "sub_questions": ["목이 마르면 물을 ( ) 그래?"]
    },
    "answers": [{
      "text": "마시지",
      "valid": true
    }, {
      "text": "마르면",
      "valid": false
    }, {
      "text": "마실수",
      "valid": false
    }, {
      "text": "마시면",
      "valid": false
    }, {
      "text": "마시어",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 보기를 보고 괄호( )에 적합한 단어를 고르시오.",
      "sub_questions": ["( )하고 집에 오면 너무 피곤해요"]
    },
    "answers": [{
      "text": "퇴근",
      "valid": true
    }, {
      "text": "직장",
      "valid": false
    }, {
      "text": "사무실",
      "valid": false
    }, {
      "text": "휴가",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 보기를 보고 괄호( )에 적합한 단어를 고르시오.",
      "sub_questions": ["아침에 일찍 ( ) 새벽 5시 기차를 탈 수 있다."]
    },
    "answers": [{
      "text": "일어나야",
      "valid": true
    }, {
      "text": "일어나면서",
      "valid": false
    }, {
      "text": "일어나",
      "valid": false
    }, {
      "text": "일어나고서",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 보기를 보고 괄호( )에 적합한 단어를 고르시오.",
      "sub_questions": ["눈 때문에 세상이 다 ( )."]
    },
    "answers": [{
      "text": "하얘요.",
      "valid": true
    }, {
      "text": "하야요.",
      "valid": false
    }, {
      "text": "까먜요.",
      "valid": false
    }, {
      "text": "까매요.",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 보기를 보고 괄호( )에 적합한 단어를 고르시오.",
      "sub_questions": ["음악을 ( ) 운동해요."]
    },
    "answers": [{
      "text": "들으면서",
      "valid": true
    }, {
      "text": "듣고",
      "valid": false
    }, {
      "text": "들으며",
      "valid": false
    }, {
      "text": "들고",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 글을 보고 무엇에 관한 글인지 고르시오.",
      "sub_questions": ["최대 규모의 상영관 ! 최고의 화질을 보장 합니다."]
    },
    "answers": [{
      "text": "영화관",
      "valid": true
    }, {
      "text": "극장",
      "valid": false
    }, {
      "text": "병원",
      "valid": false
    }, {
      "text": "영사관",
      "valid": false
    }]
  }, {
    "question": {
      "type": 1,
      "text": "다음 글을 보고 무엇에 관한 글인지 고르시오.",
      "sub_questions": ["ㆍ시원한 장소에 보관하십시오.", "ㆍ유통기한을 준수 하십시오."]
    },
    "answers": [{
      "text": "주의 사항",
      "valid": true
    }, {
      "text": "재료 안내",
      "valid": false
    }, {
      "text": "구매 방법",
      "valid": false
    }, {
      "text": "제품 문의",
      "valid": false
    }]
  }]
}



export default questions;