---
title: "A Pragmatic Guide to GLM and GBM for Actuaries"
date: 2025-10-01
draft: false
description: "A technical comparison of GLM and GBM, covering their math, applications in ratemaking and reserving, and regulatory implications."
tags: ["glm", "gbm", "glm vs gbm", "pricing", "reserving"]
slug: "a-pragmatic-guide-to-glm-and-gbm-for-actuaries"
---

After observing the persistent debate surrounding GLM vs. GBM in insurance pricing and reserving, I decided to synthesize the core arguments and technical details into this comprehensive analysis. The goal is to move beyond a surface-level comparison and provide a valuable resource for practitioners, detailing the mathematical underpinnings, practical applications, and strategic considerations of each model.

## Foundational Mathematics: A Side-by-Side Look

Understanding these models begins with their mathematical architecture. One is a framework of elegant, structured assumptions; the other is a powerful, iterative algorithm.

### Generalized Linear Model (GLM)

The GLM assumes that a transformation of the expected value of our target variable is a linear combination of the predictor variables.

**Formula:** g(E[Y|X]) = β₀ + Σ βᵢXᵢ

**Actuarial Interpretation:** Think of this as a sophisticated recipe. **Y** is the final outcome (e.g., claim count). **X** represents our ingredients (age, car type). The coefficients **β** are the precise measurements for each ingredient, found by a rigorous process (Maximum Likelihood Estimation) to best match the data. The link function **g()**, like a log, is what allows us to connect our linear recipe to a non-linear outcome (like claim counts, which can't be negative). The beauty is in the coefficients: the factor for a sports car is simply e^β_sportscar, a clear, defensible number perfect for rate filings.

### Gradient Boosting Machine (GBM)

The GBM builds its prediction sequentially. It starts with a simple guess and iteratively adds small models (usually decision trees) that correct the errors of the previous stage.

**Formula:** F_m(x) = F_{m-1}(x) - ν · [∂L/∂F]_{F=F_{m-1}}

**Actuarial Interpretation:** This is less like a recipe and more like an artist sculpting. **F_{m-1}(x)** is the sculpture after m-1 rounds. The term **[∂L/∂F]** is the gradient of the loss function—a mathematical way of finding the "roughest," most incorrect part of the current sculpture. The model then adds a new piece (a small decision tree, scaled by learning rate **ν**) to smooth out that specific rough spot. It repeats this hundreds of times, resulting in a highly detailed and accurate final prediction, even if there's no simple recipe to describe it.

## Application in Ratemaking

In ratemaking, we need a model that is not only accurate but also explainable and fair. The models approach this challenge from opposite ends.

The GLM's structure is its superpower here. By modeling frequency (e.g., with a Poisson GLM) and severity (e.g., with a Gamma GLM) separately, we maintain the multiplicative nature of the pure premium. This means the final tariff plan is easy to build and explain to regulators. The model's assumptions (linearity, independence) are its weakness; if reality is more complex, the GLM will miss it.

The GBM's strength is its ability to uncover those complex realities automatically. It can discover that the risk of a red sports car is high for young drivers but negligible for older drivers—a non-linear interaction a GLM would miss unless explicitly told to look for it. The challenge is that this insight is buried in hundreds of decision trees. To use a GBM in ratemaking, we must perform an "autopsy" using tools like SHAP to translate the complex model into a set of understandable business rules and approximate rating factors.

## Application in Loss Reserving

In reserving, the goal is to estimate the ultimate cost of claims that have been incurred but not yet settled. This involves forecasting future claim development.

The GLM provides a powerful statistical foundation for traditional aggregate reserving methods. For example, the chain-ladder technique can be formulated as a GLM. By treating the cells of a claims triangle as observations, we can model the expected loss E[C_{i,j}] for accident year *i* and development period *j* as:

**log(E[C_{i,j}]) = μ + α_i + γ_j**

This approach gives statistical legitimacy to the chain-ladder factors and, more importantly, allows us to calculate standard errors and produce a predictive distribution for the total reserve, quantifying our uncertainty.

The GBM enables a shift from aggregate data to granular, individual claim reserving. Instead of a triangle, the input is a dataset where each row is a single claim at a point in time. A GBM can use dozens of features—time-to-report, litigation status, injury type, initial case estimate changes—to predict the claim's future development. This "micro-reserving" approach can detect trends far earlier than aggregate methods. A spike in claims with a specific injury code might be a powerful leading indicator of future inflation, a signal that would be invisible in an aggregate triangle for months or even years.

## The Regulatory Perspective

Any actuarial model, particularly for pricing, must be approved by regulators whose primary mandates are consumer protection and insurer solvency. This is where the philosophical differences between GLM and GBM become starkly practical.

GLMs are the longstanding regulatory standard because they are inherently transparent. Each coefficient corresponds to a specific rating variable, making it easy for regulators to audit for issues like unfair discrimination. They can verify that the proposed rates are cost-based and that the impact of each variable is explicit and justifiable. The entire structure of a GLM-based rate filing is built on this foundation of clear, additive effects.

GBMs present a "black box" challenge. A regulator cannot easily verify that the model is not implicitly creating unfair correlations or using proxies for prohibited rating variables. The path to regulatory acceptance for GBMs requires a new level of model governance. Companies must provide extensive documentation on their validation processes, especially out-of-time testing to prove the model's stability. Crucially, they must use explainability tools like SHAP and Partial Dependence Plots to deconstruct the model's logic and demonstrate that it behaves in a fair and intuitive manner. The conversation with the regulator shifts from "Here are our coefficients" to "Here is the evidence that our complex, but more accurate, model is robust and fair."

## Conceptual Checkpoint

Consider your modeling priorities to understand which approach fits best.

**1. Your primary goal is creating a rate filing for a regulator. You need maximum transparency. You choose:**
- A) GLM, for its directly interpretable coefficients.
- B) GBM, and prepare a 50-page appendix of SHAP plots.

**2. You are building a model for individual claim reserving where predictive accuracy is paramount to set IBNR. You choose:**
- A) GLM on aggregated data, for a stable, high-level view.
- B) GBM on granular claim data, to capture subtle predictive signals.

**Feedback:** If you chose mostly A's, your priorities align with the strengths of GLMs—transparency and structural stability. If mostly B's, your priorities align with GBMs—predictive accuracy and capturing complex data patterns. A mix reflects a balanced, hybrid approach.

## Visualizing the Functional Difference

The core difference lies in how each model fits data. The GLM fits a smooth, pre-defined curve (a parametric function) to the data. It's a good approximation. The GBM, however, builds a flexible, step-wise function that more closely hugs the contours of the data, capturing the non-linearity that the GLM's assumptions smooth over.

## The Actuarial Verdict: A Hybrid Strategy

The most effective approach is not to choose one model over the other, but to build a process that leverages the strengths of both. A best-practice workflow often involves using a GBM as a powerful discovery tool. By training a GBM on a wide dataset, an actuary can identify the most significant variables and, crucially, uncover important non-linear relationships and interactions.

These discovered insights can then be used to enhance the final, production-level GLM. For example, if the GBM shows a strong "U-shaped" relationship with age, the actuary can explicitly add Age and Age² as predictors in the GLM. This hybrid strategy uses the machine learning model for its predictive power and insight generation, while using the statistical model for its transparency and regulatory compliance. It is the synthesis of these two powerful paradigms that represents the future of the actuarial toolkit.