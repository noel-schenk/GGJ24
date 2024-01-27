import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
import math

def test1():
    ## v2 models
    model_path = "cloudyu/Mixtral_11Bx2_MoE_19B"

    tokenizer = AutoTokenizer.from_pretrained(model_path, use_default_system_prompt=False)
    model = AutoModelForCausalLM.from_pretrained(
        model_path, torch_dtype=torch.float32, device_map='cpu',local_files_only=False
    )
    print(model)
    prompt = input("please input prompt:")
    while len(prompt) > 0:
        input_ids = tokenizer(prompt, return_tensors="pt").input_ids

        generation_output = model.generate(
            input_ids=input_ids, max_new_tokens=500,repetition_penalty=1.2
        )
        print(tokenizer.decode(generation_output[0]))
        prompt = input("please input prompt:")




def test2():
    pipe = pipeline("text-generation", model="rishiraj/CatPPT", torch_dtype=torch.bfloat16, device_map="auto")

    # We use the tokenizer's chat template to format each message - see https://huggingface.co/docs/transformers/main/en/chat_templating
    messages = [
        {
            "role": "system",
            "content": "You are a friendly chatbot who always responds in the style of a pirate"
        },
        {
            "role": "user",
            "content": "How many helicopters can a human eat in one sitting?"
        }
    ]
    prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

    print(prompt)

    outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
    print(outputs[0]["generated_text"])
    

test2()