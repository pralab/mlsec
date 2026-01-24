---
type: past
date: 2026-01-14T15:00:00+1:00
speaker: Egor Zverev 
affiliation: ISTA
title: "ASIDE: Architectural Separation of Instructions and Data in Language Models"
bio: Egor is a 3rd year PhD student at ISTA, Austria, working under the supervision of Christoph Lampert. He is also an ELLIS PhD Student co-supervised by Florian Tramer. He is broadly interested in AI Safety and Security, with a particular focus on improving LLM Security through architectures. In his previous work he has formalized the problem of instruction-data separation (i.e., what it means for the model to separate executable instructions from non-executable data) and proposed a method to increase such separation through architectural changes. Before coming to ISTA, he got his B.S.(Hons) in Applied Math and CS from the Yandex Department of Data Analysis at the Moscow Institute of Physics and Technology, where he also taught python and stats.
abstract: Despite their remarkable performance, large language models lack elementary safety features, making them susceptible to numerous malicious attacks. In particular, previous work has identified the absence of an intrinsic separation between instructions and data as a root cause of the success of prompt injection attacks. In this work, we propose a new architectural element, ASIDE, that allows language models to clearly separate instructions and data at the level of embeddings. ASIDE applies an orthogonal rotation to the embeddings of data tokens, thus creating clearly distinct representations of instructions and data tokens without introducing any additional parameters. As we demonstrate experimentally across a range of models, instruction-tuning LLMs with ASIDE (1) leads to highly increased instruction-data separation without a loss in model utility and (2) makes the models more robust to prompt injection benchmarks, even without dedicated safety training. Additionally, we provide insights into the mechanism underlying our method through an analysis of the model representations.
youtube: BNVPTKafa7A

---
