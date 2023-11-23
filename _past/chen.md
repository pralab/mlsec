---
type: past
date: 2018-09-16T8:00:00+1:00
speaker: Yizheng Chen
affiliation: University of California, Berkeley
title: "Learning Security Classifiers with Verified Global Robustness Properties"
bio: "Yizheng Chen is a postdoctoral scholar at University of California, Berkeley. She will join University of Maryland as an Assistant Professor of Computer Science in January, 2023. Previously, she was a postdoctoral scholar at Columbia University. She holds a Ph.D. in Computer Science from Georgia Institute of Technology. Her research focuses on building robust machine learning algorithms for security applications. Her work has received an ACM CCS Best Paper Award Runner-up, a Google ASPIRE Award and an Amazon Research Award. She is a recipient of the Anita Borg Memorial Scholarship."
abstract: "Many recent works have proposed methods to train classifiers with local robustness properties, which can provably eliminate classes of evasion attacks for most inputs, but not all inputs. Since data distribution shift is very common in security applications, e.g., often observed for malware detection, local robustness cannot guarantee that the property holds for unseen inputs at the time of deploying the classifier. Therefore, it is more desirable to enforce global robustness properties that hold for all inputs, which is strictly stronger than local robustness. 

In this talk, I will discuss methods to train security classifiers with global robustness properties. I will show how to use security domain knowledge and economic cost measurement studies to formulate global robustness properties to capture general classes of evasion strategies that are inexpensive for attackers. Then, I will describe a new algorithm to train security classifiers to satisfy these properties. I will show how to apply the method to detect fake accounts, Twitter spam URLs, and Cryptojacking, and demonstrate that it is not only sound but also practical. We show that we can train classifiers to satisfy different global robustness properties for three security datasets, and even multiple properties at the same time, with modest impact on the classifier’s performance. "
youtube: STQwFwN5Ln8
---
